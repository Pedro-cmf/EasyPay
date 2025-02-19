import React, { useState } from 'react';
import {
  ModalOverlay,
  ModalContent,
  StepIndicator,
  ButtonGroup,
  InputField,
} from './styled';

export default function TransferenciaModal({ onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    chave: '',
    valor: '',
  });

  const handleNext = () => setStep((prev) => prev + 1);
  const handlePrev = () => setStep((prev) => prev - 1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <StepIndicator>
          <span style={{ color: step >= 1 ? '#007aff' : '#aaa' }}>1 Conta</span>
          <span style={{ color: step >= 2 ? '#007aff' : '#aaa' }}>2 Valor</span>
          <span style={{ color: step >= 3 ? '#007aff' : '#aaa' }}>3 Revisão</span>
        </StepIndicator>

        {step === 1 && (
          <div>
            <h3>Informe a Chave</h3>
            <InputField
              type="text"
              name="chave"
              placeholder="Digite a chave de transferência"
              value={formData.chave}
              onChange={handleChange}
            />
            <ButtonGroup>
              <button className="primary" onClick={handleNext}>Continuar</button>
            </ButtonGroup>
          </div>
        )}

        {step === 2 && (
          <div>
            <h3>Informe o Valor</h3>
            <InputField
              type="number"
              name="valor"
              placeholder="R$ 0,00"
              value={formData.valor}
              onChange={handleChange}
            />
            <ButtonGroup>
              <button className="secondary" onClick={handlePrev}>Voltar</button>
              <button className="primary" onClick={handleNext}>Revisar</button>
            </ButtonGroup>
          </div>
        )}

        {step === 3 && (
          <div>
            <h3>Revisão</h3>
            <p><strong>Chave:</strong> {formData.chave}</p>
            <p><strong>Valor:</strong> R$ {formData.valor}</p>
            <ButtonGroup>
              <button className="secondary" onClick={handlePrev}>Voltar</button>
              <button className="primary" onClick={onClose}>Confirmar</button>
            </ButtonGroup>
          </div>
        )}
      </ModalContent>
    </ModalOverlay>
  );
}
