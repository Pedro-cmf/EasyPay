import React, { useState, useEffect } from 'react';
import api from '../../../../../api/api ';
import {
  TransacaoModalContainer,
  TransacaoContent,
  InputField,
  ModalButton,
  ContactList,
  ContactItem,
  Title,
  Subtitle,
} from './styled';

function TransacaoModal({ onClose, setModal, setSelectedContact }) {
  const [chave, setChave] = useState('');
  const [contatos, setContatos] = useState([]);

  useEffect(() => {
    const carregarContatos = async () => {
      const response = await api.get('/contacts');
      setContatos(response.data);
    };
    carregarContatos();
  }, []);

  const handleContinuar = () => {
    if (!chave) return;
    setSelectedContact(chave);
    setModal('valor');
  };

  return (
    <TransacaoModalContainer onClick={onClose}>
      <TransacaoContent onClick={(e) => e.stopPropagation()}>
        <Title>Nova transferência</Title>
        <Subtitle>Conta</Subtitle>
        <InputField
          type="text"
          placeholder="Chave de conta"
          value={chave}
          onChange={(e) => setChave(e.target.value)}
        />
        <ModalButton onClick={handleContinuar}>Continuar</ModalButton>

        <Subtitle>Meus contatos</Subtitle>
        <ContactList>
          {contatos.map((contato) => (
            <ContactItem key={contato.id}>
              <div>
                <strong>{contato.name}</strong>
                <p>Chave: {contato.key}</p>
              </div>
              <ModalButton onClick={() => { setChave(contato.key); }}>
                Selecionar
              </ModalButton>
            </ContactItem>
          ))}
        </ContactList>
      </TransacaoContent>
    </TransacaoModalContainer>
  );
}

export default TransacaoModal;
