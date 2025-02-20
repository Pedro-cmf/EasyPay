import React from 'react';
import { ModalButton } from '../../../components/baseHome/modalBase';

function RevisaoStep({ formData, back }) {
  return (
    <>
      <p>Chave: {formData.chave}</p>
      <p>Valor: R$ {formData.valor}</p>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <ModalButton onClick={back}>Voltar</ModalButton>
        <ModalButton onClick={() => alert('Transferência confirmada!')}>Confirmar</ModalButton>
      </div>
    </>
  );
}

export default RevisaoStep;
