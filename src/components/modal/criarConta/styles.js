import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  width: 450px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  overflow-y: auto;
  max-height: 90vh;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

export const Label = styled.label`
  margin-bottom: 8px;
  font-weight: bold;
`;

export const InfoText = styled.p`
  font-size: 12px;
  color: #666;
  margin-top: -10px;
  margin-bottom: 10px;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  font-size: 10px;

  input[type="checkbox"] {
    margin-right: 10px;
  }
`;

export const CnpjInput = styled.input`
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  font-size: 14px;
  background-color: #f9f9f9;
  font-family: monospace;
`;

export const FormInput = styled.input`
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  font-size: 14px;
  width: 100%;
  box-sizing: border-box;
`;

export const SubmitButton = styled.button`
  padding: 12px;
  background-color: #007aff;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 15px;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const ModalTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: -30px;
  text-align: center;
  span {
    color: #007aff;
  }
`;

export const Labels = styled.label`
    font-size: 12px;
    `

export const ParagrafoPrincipal = styled.p`

  margin-bottom: 30px;

`
export const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  margin-top: -10px;
  margin-bottom: 15px;
`;

export const SuccessModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const SuccessContent = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 16px;
  width: 100%;
  max-width: 400px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  img {
    width: 30px;
    height: 30px;
    margin-bottom: 16px;
  }

  h3 {
    font-size: px;
    font-weight: bold;
    margin-bottom: 12px;
    color: #333;
  }

  p {
    font-size: 16px;
    color: #666;
    margin-bottom: 24px;
    line-height: 1.4;
  }
`;

export const SuccessButton = styled.button`
  width: 100%;
  padding: 14px 0;
  background-color: #007aff;
  color: white;
  font-weight: bold;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005bb5;
  }
`;