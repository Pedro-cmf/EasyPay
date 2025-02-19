import React from 'react';
import { ErrorModalContainer, ErrorContent, ErrorButton, ErrorIcon, StatusBadge } from './styled'; 

function ErroModal({ onClose, setModal }) {
  return (
    <ErrorModalContainer onClick={onClose}>
      <ErrorContent onClick={(e) => e.stopPropagation()}>
        <ErrorIcon src={errorIcon} alt="Erro" />
        <h3>Erro na transação</h3>
        <StatusBadge status="Erro">Erro</StatusBadge> 
        <p>Houve um problema ao processar sua transação. Tente novamente.</p>
        <ErrorButton onClick={() => setModal('transacao')}>Tentar novamente</ErrorButton>
      </ErrorContent>
    </ErrorModalContainer>
  );
}

export default ErroModal;
