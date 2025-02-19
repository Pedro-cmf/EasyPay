import React from 'react';
import { RevisaoModalContainer, RevisaoContent, RevisaoButton, InfoRow, InfoLabel, InfoValue } from './styled';

function RevisaoModal({ onClose, setModal, revisaoData }) {
  const { destinatario, cpfCnpj, chave, valor } = revisaoData;

  return (
    <RevisaoModalContainer onClick={onClose}>
      <RevisaoContent onClick={(e) => e.stopPropagation()}>
        <h3>Revisão da Transferência</h3>
        <InfoRow>
          <InfoLabel>Para:</InfoLabel>
          <InfoValue>{destinatario}</InfoValue>
        </InfoRow>
        <InfoRow>
          <InfoLabel>CPF/CNPJ:</InfoLabel>
          <InfoValue>{cpfCnpj}</InfoValue>
        </InfoRow>
        <InfoRow>
          <InfoLabel>Chave:</InfoLabel>
          <InfoValue>{chave}</InfoValue>
        </InfoRow>
        <InfoRow>
          <InfoLabel>Valor:</InfoLabel>
          <InfoValue>R$ {valor}</InfoValue>
        </InfoRow>

        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <RevisaoButton variant="back" onClick={() => setModal('valor')}>
            Voltar
          </RevisaoButton>
          <RevisaoButton variant="confirm" onClick={() => setModal('confirmacao')}>
            Confirmar
          </RevisaoButton>
        </div>
      </RevisaoContent>
    </RevisaoModalContainer>
  );
}

export default RevisaoModal;
