import React, { useState, useEffect } from 'react';
import api from '../../../api/api ';
import Navbar from '../../components/navbar/navBar';
import Footer from '../../components/footer/footer';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
import {
  Container,
  Section,
  TransferContainer,
  StepIndicator,
  DetalhesConta,
} from './transferenciaStyles';

function Transferencia() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ chave: '', valor: '' });
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const resUsuario = await api.get('/users/1');
      setUsuario(resUsuario.data);
    };
    fetchData();
  }, []);

  const handleNext = async () => {
    try {
      const res = await api.get('/users');
      const userExists = res.data.find(user => user.key === formData.chave);

      if (userExists) {
        setFormData({ ...formData, name: userExists.name });
        setStep((prev) => prev + 1);
      } else {
        alert('⚠️ Chave inválida. Usuário não encontrado.');
      }
    } catch (error) {
      console.error('Erro ao validar a chave:', error);
    }
  };

  const handlePrev = () => setStep((prev) => prev - 1);

  const handleSubmit = async () => {
    await api.post('/transactions', formData);
    window.location.href = '/transacoes';
  };

  return (
    <Container>
      <Navbar handleLogout={() => (window.location.href = '/')} />
      <Section>
        <TransferContainer>
          <h2>Nova transferência</h2>
          <StepIndicator>
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className={`step ${step === num ? 'active' : step > num ? 'completed' : ''}`}
              >
                <div className="circle">{num}</div>
                {num === 1 && 'Conta'}
                {num === 2 && 'Valor'}
                {num === 3 && 'Revisão'}
              </div>
            ))}
          </StepIndicator>

          {step === 1 && (
            <>
              <Input
                label="Chave da conta"
                placeholder="Digite a chave"
                value={formData.chave}
                onChange={(e) =>
                  setFormData({ ...formData, chave: e.target.value })
                }
              />
              <Button onClick={handleNext} disabled={!formData.chave}>
                Continuar
              </Button>
            </>
          )}

          {step === 2 && (
            <>
              <p>
                Para: <strong>{formData.name}</strong>
              </p>
              <p>Chave: {formData.chave}</p>
              <Input
                label="Valor (R$)"
                placeholder="Digite o valor"
                value={formData.valor}
                onChange={(e) =>
                  setFormData({ ...formData, valor: e.target.value })
                }
              />
              <div style={{ display: 'flex', gap: '10px' }}>
                <Button onClick={handlePrev}>Voltar</Button>
                <Button onClick={handleNext} disabled={!formData.valor}>
                  Revisar
                </Button>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <h4>Revisão</h4>
              <p>
                Para: <strong>{formData.name}</strong>
              </p>
              <p>Chave: {formData.chave}</p>
              <p>Valor: R$ {formData.valor}</p>
              <div style={{ display: 'flex', gap: '10px' }}>
                <Button onClick={handlePrev}>Voltar</Button>
                <Button onClick={handleSubmit}>Confirmar</Button>
              </div>
            </>
          )}
        </TransferContainer>

        <div>
          <DetalhesConta>
            <h4>Detalhes da Conta</h4>
            {usuario && (
              <>
                <p>Nome: {usuario.name}</p>
                <p>E-mail: {usuario.email}</p>
                <p>Tipo: {usuario.isBusiness ? 'Empresa' : 'Pessoal'}</p>
              </>
            )}
          </DetalhesConta>

          <DetalhesConta>
            <h4>Conta</h4>
            {usuario && (
              <>
                <p>Número: {usuario.accountNumber}</p>
                <p>Saldo: R$ {usuario.balance}</p>
                <p>Chave: {usuario.key}</p>
              </>
            )}
          </DetalhesConta>
        </div>
      </Section>
      <Footer />
    </Container>
  );
}

export default Transferencia;
