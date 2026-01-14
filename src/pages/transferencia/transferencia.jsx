import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useTransactions } from '../../hooks/useTransactions';
import Navbar from '../../components/navbar/navBar';
import Footer from '../../components/footer/footer';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
import {
  Container,
  Section,
  TabelaTransacoes,
  DetalhesConta,
  AccountValue,
  FormGroup,
  StepIndicator,
  Step,
  StepDivider,
  RecipientCard,
  ButtonGroup,
  ErrorAlert,
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

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value || 0);
  };

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
      setError('Saldo insuficiente para esta transferência');
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

          <StepIndicator>
            <Step $active={step === 1} $completed={step > 1}>
              <span className="number">{step > 1 ? '✓' : '1'}</span>
              <span className="label">Destinatário</span>
            </Step>
            <StepDivider $completed={step > 1} />
            <Step $active={step === 2}>
              <span className="number">2</span>
              <span className="label">Valor</span>
            </Step>
          </StepIndicator>

          {error && <ErrorAlert>{error}</ErrorAlert>}

          {step === 1 && (
            <FormGroup>
              <Input
                label="Chave PIX do destinatário"
                placeholder="Digite a chave PIX"
                value={formData.chave}
                onChange={(e) =>
                  setFormData({ ...formData, chave: e.target.value })
                }
                disabled={isLoading}
              />
              <Button onClick={handleNext} disabled={isLoading} fullWidth>
                {isLoading ? 'Buscando...' : 'Continuar'}
              </Button>
            </FormGroup>
          )}

          {step === 2 && (
            <FormGroup>
              <RecipientCard>
                <p>{formData.name}</p>
                <p>Chave: {formData.chave}</p>
              </RecipientCard>

              <Input
                label="Valor da transferência"
                placeholder="R$ 0,00"
                type="number"
                min="0.01"
                step="0.01"
                value={formData.valor}
                onChange={(e) =>
                  setFormData({ ...formData, valor: e.target.value })
                }
                disabled={isLoading}
              />

              <ButtonGroup>
                <Button
                  variant="secondary"
                  onClick={handleBack}
                  disabled={isLoading}
                >
                  Voltar
                </Button>
                <Button onClick={handleSubmit} disabled={isLoading} fullWidth>
                  {isLoading ? 'Processando...' : 'Confirmar Transferência'}
                </Button>
              </ButtonGroup>
            </FormGroup>
          )}
        </TabelaTransacoes>

        <DetalhesConta>
          <h4>Minha Conta</h4>
          <p>
            Nome
            <AccountValue>{user?.name}</AccountValue>
          </p>
          <p>
            Saldo disponível
            <AccountValue $highlight $large>
              {formatCurrency(user?.balance)}
            </AccountValue>
          </p>
          <p>
            Chave PIX
            <AccountValue>{user?.key}</AccountValue>
          </p>
        </DetalhesConta>
      </Section>
      <Footer />
    </Container>
  );
}

export default Transferencia;
