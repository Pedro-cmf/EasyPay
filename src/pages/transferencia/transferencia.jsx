import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useTransactions } from '../../hooks/useTransactions';
import Navbar from '../../components/navbar/navBar';
import Footer from '../../components/footer/footer';
import {
  Container,
  Section,
  TabelaTransacoes,
  DetalhesConta,
} from './transferenciaStyles';

function Transferencia() {
  const navigate = useNavigate();
  const { user, logout, refreshUser } = useAuth();
  const { createTransaction, findUserByPixKey } = useTransactions();

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    chave: '',
    valor: '',
    name: '',
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleNext = async () => {
    if (!formData.chave.trim()) {
      setError('Digite uma chave PIX válida');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const recipient = await findUserByPixKey(formData.chave);
      setFormData((prev) => ({ ...prev, name: recipient.name }));
      setStep(2);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async () => {
    const valor = parseFloat(formData.valor);

    if (!valor || valor <= 0) {
      setError('Digite um valor válido');
      return;
    }

    if (valor > (user?.balance || 0)) {
      setError('Saldo insuficiente');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      await createTransaction({
        chave: formData.chave,
        value: valor,
        name: formData.name,
      });
      await refreshUser();
      navigate('/transacoes');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    setStep(1);
    setError('');
  };

  return (
    <Container>
      <Navbar user={user} handleLogout={logout} />
      <Section>
        <TabelaTransacoes>
          <h3>Nova Transferência</h3>

          {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}

          {step === 1 && (
            <>
              <input
                placeholder="Chave PIX do destinatário"
                value={formData.chave}
                onChange={(e) =>
                  setFormData({ ...formData, chave: e.target.value })
                }
                disabled={isLoading}
              />
              <button onClick={handleNext} disabled={isLoading}>
                {isLoading ? 'Buscando...' : 'Próximo'}
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <p>Para: {formData.name}</p>
              <p>Chave: {formData.chave}</p>
              <input
                placeholder="Valor (R$)"
                type="number"
                min="0.01"
                step="0.01"
                value={formData.valor}
                onChange={(e) =>
                  setFormData({ ...formData, valor: e.target.value })
                }
                disabled={isLoading}
              />
              <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                <button onClick={handleBack} disabled={isLoading}>
                  Voltar
                </button>
                <button onClick={handleSubmit} disabled={isLoading}>
                  {isLoading ? 'Processando...' : 'Confirmar'}
                </button>
              </div>
            </>
          )}
        </TabelaTransacoes>

        <DetalhesConta>
          <h4>Conta</h4>
          <p>Nome: {user?.name}</p>
          <p>Saldo: R$ {user?.balance?.toFixed(2)}</p>
          <p>Chave: {user?.key}</p>
        </DetalhesConta>
      </Section>
      <Footer />
    </Container>
  );
}

export default Transferencia;
