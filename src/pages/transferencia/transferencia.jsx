import React, { useState, useEffect } from 'react';
import api from '../../../api/api ';
import Navbar from '../../components/navbar/navBar';
import Footer from '../../components/footer/footer';
import { Container, Section, TabelaTransacoes, DetalhesConta } from './transferenciaStyles';

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
    const res = await api.get('/users');
    const userExists = res.data.find(user => user.key === formData.chave);
    if (userExists) {
      setFormData({ ...formData, name: userExists.name });
      setStep(step + 1);
    } else alert('⚠️ Chave inválida.');
  };

  const handleSubmit = async () => {
    await api.post('/transactions', formData);
    window.location.href = '/transacoes';
  };

  return (
    <Container>
      <Navbar handleLogout={() => (window.location.href = '/')} />
      <Section>
        <TabelaTransacoes>
          <h3>Nova Transferência</h3>
          {step === 1 && (
            <>
              <input placeholder="Chave" onChange={(e) => setFormData({ ...formData, chave: e.target.value })} />
              <button onClick={handleNext}>Próximo</button>
            </>
          )}
          {step === 2 && (
            <>
              <p>Para: {formData.name}</p>
              <input placeholder="Valor" onChange={(e) => setFormData({ ...formData, valor: e.target.value })} />
              <button onClick={handleSubmit}>Confirmar</button>
            </>
          )}
        </TabelaTransacoes>

        <DetalhesConta>
          <h4>Conta</h4>
          <p>Nome: {usuario?.name}</p>
          <p>Saldo: R$ {usuario?.balance}</p>
          <p>Chave: {usuario?.key}</p>
        </DetalhesConta>
      </Section>
      <Footer />
    </Container>
  );
}

export default Transferencia;
