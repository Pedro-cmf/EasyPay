import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../../services/api';
import successImg from '../../../assets/success.png';
import {
  ModalOverlay,
  ModalContent,
  CloseButton,
  ModalHeader,
  ModalTitle,
  FormInput,
  SubmitButton,
  CheckboxLabel,
  Labels,
  ParagrafoPrincipal,
  ErrorMessage,
  SuccessModal,
  SuccessContent,
  SuccessButton,
} from './styles';

function OpenAccountModal({ isOpen, onRequestClose }) {
  const [isBusiness, setIsBusiness] = useState(false);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [existingUsers, setExistingUsers] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get('/users');
        setExistingUsers(response.data);
      } catch (error) {
        setErrors({ general: 'Erro ao carregar dados' });
      }
    };
    if (isOpen) {
      fetchUsers();
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'cpfCnpj' ? value.replace(/\D/g, '') : value,
    });
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const validateForm = () => {
    const validationErrors = {};

    if (!formData.email?.trim()) {
      validationErrors.email = 'Email é obrigatório';
    }

    if (!formData.password || formData.password.length < 8) {
      validationErrors.password = 'Senha deve ter no mínimo 8 caracteres';
    }

    if (formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword = 'As senhas não coincidem';
    }

    const cpfCnpjLength = isBusiness ? 14 : 11;
    if (!formData.cpfCnpj || formData.cpfCnpj.length !== cpfCnpjLength) {
      validationErrors.cpfCnpj = isBusiness
        ? 'CNPJ deve ter 14 dígitos'
        : 'CPF deve ter 11 dígitos';
    }

    if (existingUsers.some((user) => user.cpfCnpj === formData.cpfCnpj)) {
      validationErrors.cpfCnpj = isBusiness
        ? 'CNPJ já cadastrado'
        : 'CPF já cadastrado';
    }

    if (isBusiness && !formData.razaoSocial?.trim()) {
      validationErrors.razaoSocial = 'Razão social é obrigatória';
    }

    if (!isBusiness && !formData.name?.trim()) {
      validationErrors.name = 'Nome é obrigatório';
    }

    return validationErrors;
  };

  const generateAccountNumber = () => {
    let accountNumber;
    do {
      accountNumber = `000${Math.floor(Math.random() * 1000)}`;
    } while (existingUsers.some((user) => user.accountNumber === accountNumber));
    return accountNumber;
  };

  const generatePixKey = () => {
    return Math.random().toString(36).substring(2, 15);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const newUser = {
        name: formData.name || formData.razaoSocial,
        email: formData.email,
        cpfCnpj: formData.cpfCnpj,
        password: formData.password,
        accountNumber: generateAccountNumber(),
        balance: 0,
        key: generatePixKey(),
        type: isBusiness ? 'business' : 'personal',
      };

      await api.post('/users', newUser);
      setShowSuccess(true);
    } catch (error) {
      setErrors({ general: 'Erro ao criar conta. Tente novamente.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    onRequestClose();
    navigate('/');
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onRequestClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>
            Abra sua conta no <span>Easy</span>Pay
          </ModalTitle>
          <CloseButton onClick={onRequestClose}>×</CloseButton>
        </ModalHeader>
        <ParagrafoPrincipal>
          Complete os campos abaixo para abrir sua conta EasyPay.
        </ParagrafoPrincipal>

        {errors.general && <ErrorMessage>{errors.general}</ErrorMessage>}

        <form onSubmit={handleSubmit}>
          <Labels>Email*</Labels>
          <FormInput
            name="email"
            type="email"
            placeholder="exemplo@email.com"
            onChange={handleChange}
            required
          />
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}

          <Labels>Senha*</Labels>
          <FormInput
            name="password"
            type="password"
            placeholder="********"
            onChange={handleChange}
            required
          />
          {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}

          <Labels>Confirme sua senha*</Labels>
          <FormInput
            name="confirmPassword"
            type="password"
            placeholder="********"
            onChange={handleChange}
            required
          />
          {errors.confirmPassword && (
            <ErrorMessage>{errors.confirmPassword}</ErrorMessage>
          )}

          <CheckboxLabel>
            <input
              type="checkbox"
              onChange={() => setIsBusiness(!isBusiness)}
            />{' '}
            Conta para lojista
          </CheckboxLabel>
          <p>
            *Contas para lojistas não são aptas a realizar transferências,
            apenas receber.
          </p>

          {isBusiness ? (
            <>
              <Labels>Razão social*</Labels>
              <FormInput
                name="razaoSocial"
                type="text"
                placeholder="Razão social da empresa"
                onChange={handleChange}
                required
              />
              {errors.razaoSocial && (
                <ErrorMessage>{errors.razaoSocial}</ErrorMessage>
              )}
              <Labels>CNPJ*</Labels>
              <FormInput
                name="cpfCnpj"
                type="text"
                placeholder="00.000.000/0000-00"
                onChange={handleChange}
                required
              />
              {errors.cpfCnpj && <ErrorMessage>{errors.cpfCnpj}</ErrorMessage>}
            </>
          ) : (
            <>
              <Labels>Nome Completo*</Labels>
              <FormInput
                name="name"
                type="text"
                placeholder="João da Silva"
                onChange={handleChange}
                required
              />
              {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
              <Labels>CPF*</Labels>
              <FormInput
                name="cpfCnpj"
                type="text"
                placeholder="000.000.000-00"
                onChange={handleChange}
                required
              />
              {errors.cpfCnpj && <ErrorMessage>{errors.cpfCnpj}</ErrorMessage>}
            </>
          )}

          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'Enviar'}
          </SubmitButton>
        </form>

        {showSuccess && (
          <SuccessModal>
            <SuccessContent>
              <img
                src={successImg}
                alt="Sucesso"
                style={{ width: '80px', height: '80px', marginBottom: '20px' }}
              />
              <h3>Abertura de conta</h3>
              <p>
                Tudo pronto, agora você já pode acessar a sua conta através do
                painel de Login.
              </p>
              <SuccessButton onClick={handleSuccessClose}>Ok</SuccessButton>
            </SuccessContent>
          </SuccessModal>
        )}
      </ModalContent>
    </ModalOverlay>
  );
}

export default OpenAccountModal;
