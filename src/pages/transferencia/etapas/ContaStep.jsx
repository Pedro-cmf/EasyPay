import React from 'react';
import { InputField } from '../../../components/baseHome/inputField';
import { ModalButton } from '../../../components/baseHome/modalBase';

function ContaStep({ formData, setFormData, next }) {
  return (
    <>
      <InputField
        placeholder="Chave da conta"
        value={formData.chave}
        onChange={(e) => setFormData({ ...formData, chave: e.target.value })}
      />
      <ModalButton onClick={next} disabled={!formData.chave}>Continuar</ModalButton>
    </>
  );
}

export default ContaStep;
