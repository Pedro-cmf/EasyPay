import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from '../../hooks/useAuth';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
import Logo from '../../components/logo/logo';
import OpenAccountModal from '../../components/modal/criarConta/criarConta';
import {
  Container,
  LeftSide,
  RightSide,
  Title,
  LinkButton,
  ErrorMessage,
  LogoWrapper,
} from './loginStyles';

const schema = z.object({
  cpfCnpj: z
    .string()
    .min(11, 'CPF ou CNPJ inválido')
    .max(14, 'CPF ou CNPJ inválido'),
  password: z
    .string()
    .min(8, 'Senha deve ter no mínimo 8 caracteres'),
});

function Login() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      setLoginError('');
      const cleanCpfCnpj = data.cpfCnpj.replace(/\D/g, '');
      await login(cleanCpfCnpj, data.password);
      navigate('/home');
    } catch (error) {
      setLoginError(error.message || 'Erro ao fazer login');
    }
  };

  return (
    <Container>
      <LeftSide>
        <LogoWrapper>
          <Logo width="180px" />
        </LogoWrapper>
        <Title>Acesse sua conta</Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="CPF ou CNPJ"
            type="text"
            placeholder="Digite seu CPF ou CNPJ"
            error={errors.cpfCnpj}
            {...register('cpfCnpj')}
          />

          <Input
            label="Senha"
            type="password"
            placeholder="Digite sua senha"
            error={errors.password}
            {...register('password')}
          />

          {loginError && <ErrorMessage>{loginError}</ErrorMessage>}

          <Button type="submit" disabled={isSubmitting} fullWidth size="lg">
            {isSubmitting ? 'Entrando...' : 'Entrar'}
          </Button>
        </form>
        <p>
          Ainda não é membro?{' '}
          <LinkButton onClick={() => setModalIsOpen(true)}>
            Abra sua conta!
          </LinkButton>
        </p>

        {modalIsOpen && (
          <OpenAccountModal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
          />
        )}
      </LeftSide>
      <RightSide />
    </Container>
  );
}

export default Login;
