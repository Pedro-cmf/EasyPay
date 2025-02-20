import React from 'react';
import { InputField } from '../../../components/baseHome/inputField';
import { ModalButton } from '../../../components/baseHome/modalBase';

function ValorStep({ formData, setFormData, next, back }) {
  return (
    <>
      <InputField
        type="number"
        placeholder="Valor da transferência"
        value={formData.valor}
        onChange={(e) => setFormData({ ...formData, valor: e.target.value })}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <ModalButton onClick={back}>Voltar</ModalButton>
        <ModalButton onClick={next} disabled={!formData.valor}>Revisar</ModalButton>
      </div>
    </>
  );
}

export default ValorStep;
