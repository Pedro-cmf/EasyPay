import React from 'react';
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalTitle,
  SuccessIcon,
  ConfirmationText,
  ButtonContainer,
  ConfirmButton,
  CancelButton
} from './styled';
import SuccessImage from '../../../../assets/success.png';

const ConfirmacaoModal = ({ onClose, onConfirm }) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Transferência</ModalTitle>
          <button onClick={onClose}>×</button>
        </ModalHeader>
        <SuccessIcon src={SuccessImage} alt="Sucesso" />
        <ConfirmationText>
          Transação realizada com sucesso! <br />
          Deseja realizar uma nova transferência?
        </ConfirmationText>
        <ButtonContainer>
          <CancelButton onClick={onClose}>Não</CancelButton>
          <ConfirmButton onClick={onConfirm}>Sim</ConfirmButton>
        </ButtonContainer>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ConfirmacaoModal;
