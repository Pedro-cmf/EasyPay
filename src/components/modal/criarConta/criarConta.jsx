import React, { useState, useEffect } from 'react';
import api from '../../../../api/api ';
import { useNavigate } from 'react-router-dom';
import successImg from '../../../assets/success.png';
import { ModalOverlay, ModalContent, CloseButton, ModalHeader, ModalTitle, FormInput, SubmitButton, CheckboxLabel, Labels, ParagrafoPrincipal,
ErrorMessage,
SuccessModal,
SuccessContent,
SuccessButton } from './styles';


function OpenAccountModal({ isOpen, onRequestClose }) {
    const [isBusiness, setIsBusiness] = useState(false);
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});
    const [showSuccess, setShowSuccess] = useState(false);
    const [existingUsers, setExistingUsers] = useState([]);
    const navigate = useNavigate();
  
    useEffect(() => {
      const fetchUsers = async () => {
        const response = await api.get('/users');
        setExistingUsers(response.data);
      };
      fetchUsers();
    }, []);
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const validationErrors = {};
      const cpfExists = existingUsers.some((user) => user.cpfCnpj === formData.cpfCnpj);
  
      if (cpfExists) validationErrors.cpfCnpj = 'CPF já cadastrado';
      if (formData.password !== formData.confirmPassword) validationErrors.confirmPassword = 'As senhas não coincidem';
  
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }
  
      const newUser = {
        id: `${Math.floor(Math.random() * 10000)}`,
        name: formData.name || formData.razaoSocial,
        email: formData.email,
        cpfCnpj: formData.cpfCnpj,
        password: formData.password,
        accountNumber: `000${Math.floor(Math.random() * 100)}`,
        balance: 0,
        key: Math.random().toString(36).substring(2, 15)
      };
  
      await api.post('/users', newUser);
      setShowSuccess(true);
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
            <ModalTitle>Abra sua conta no <span>sea</span>Pay</ModalTitle>
            <CloseButton onClick={onRequestClose}>×</CloseButton>
          </ModalHeader>
          <ParagrafoPrincipal>Complete os campos abaixo para abrir sua conta seaPay.</ParagrafoPrincipal>
          <form onSubmit={handleSubmit}>
            <Labels>Email*</Labels>
            <FormInput name="email" type="email" placeholder="exemplo@email.com" onChange={handleChange} required />
  
            <Labels>Senha*</Labels>
            <FormInput name="password" type="password" placeholder="********" onChange={handleChange} required />
  
            <Labels>Confirme sua senha*</Labels>
            <FormInput name="confirmPassword" type="password" placeholder="********" onChange={handleChange} required />
            {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword}</ErrorMessage>}
  
            <CheckboxLabel>
              <input type="checkbox" onChange={() => setIsBusiness(!isBusiness)} /> Conta para lojista
            </CheckboxLabel>
            <p>*Contas para lojistas não são aptas a realizar transferências, apenas receber.</p>
  
            {isBusiness ? (
              <>
                <Labels>Razão social*</Labels>
                <FormInput name="razaoSocial" type="text" placeholder="Razão social da empresa" onChange={handleChange} required />
                <Labels>CNPJ*</Labels>
                <FormInput name="cpfCnpj" type="text" placeholder="00.000.000/0000-00" onChange={handleChange} required />
              </>
            ) : (
              <>
                <Labels>Nome Completo*</Labels>
                <FormInput name="name" type="text" placeholder="João da Silva" onChange={handleChange} required />
                <Labels>CPF*</Labels>
                <FormInput name="cpfCnpj" type="text" placeholder="000.000.000-00" onChange={handleChange} required />
                {errors.cpfCnpj && <ErrorMessage>{errors.cpfCnpj}</ErrorMessage>}
              </>
            )}
  
            <SubmitButton type="submit">Enviar</SubmitButton>
          </form>
  
          {showSuccess && (
            <SuccessModal>
              <SuccessContent>
              <img src={successImg} alt="Sucesso" style={{ width: '80px', height: '80px', marginBottom: '20px' }} />
                <h3>Abertura de conta</h3>
                <p>Tudo pronto, agora você já pode acessar a sua conta através do painel de Login.</p>
                <SuccessButton onClick={handleSuccessClose}>Ok</SuccessButton>
              </SuccessContent>
            </SuccessModal>
          )}
        </ModalContent>
      </ModalOverlay>
    );
  }
  
  export default OpenAccountModal;
