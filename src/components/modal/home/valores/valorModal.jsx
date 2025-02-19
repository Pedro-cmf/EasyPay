import React, { useState } from 'react';
import {
  ValorModalContainer,
  ValorContent,
  InputField,
  ModalButton,
  Title,
  Subtitle,
  ErrorText,
  CheckboxLabel,
} from './styled';

function ValorModal({ onClose, setModal, selectedContact, salvarContato }) {
  const [valor, setValor] = useState('');
  const [salvar, setSalvar] = useState(false);
  const [erro, setErro] = useState('');

  const handleRevisar = () => {
    if (!valor || parseFloat(valor) <= 0) {
      setErro('Insira um valor válido para a transferência.');
      return;
    }
    setErro('');
    salvarContato(valor, salvar); // Função para manipular o estado global
    setModal('revisao');
  };

  return (
    <ValorModalContainer onClick={onClose}>
      <ValorContent onClick={(e) => e.stopPropagation()}>
        <Title>Nova transferência</Title>
        <Subtitle>Valor</Subtitle>
        <p>
          Para: <strong>{selectedContact?.name}</strong>
        </p>
        <p>CPF: {selectedContact?.cpf}</p>
        <p>Chave: {selectedContact?.key}</p>

        <InputField
          type="number"
          placeholder="R$0,00"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />
        {erro && <ErrorText>{erro}</ErrorText>}

        <CheckboxLabel>
          <input type="checkbox" checked={salvar} onChange={() => setSalvar(!salvar)} />
          Salvar contato
        </CheckboxLabel>

        <ModalButton onClick={handleRevisar}>Revisar</ModalButton>
        <ModalButton className="back" onClick={() => setModal('transacao')}>
          Voltar
        </ModalButton>
      </ValorContent>
    </ValorModalContainer>
  );
}

export default ValorModal;
