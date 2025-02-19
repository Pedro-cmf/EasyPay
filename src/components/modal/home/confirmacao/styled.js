import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: white;
  width: 400px;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-bottom: 20px;

  button {
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
  }
`;

export const ModalTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
`;

export const SuccessIcon = styled.img`
  width: 64px;
  height: 64px;
  margin-bottom: 20px;
`;

export const ConfirmationText = styled.p`
  font-size: 16px;
  text-align: center;
  margin-bottom: 30px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 15px;
`;

export const ConfirmButton = styled.button`
  flex: 1;
  background-color: #007aff;
  color: white;
  padding: 12px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #005bb5;
  }
`;

export const CancelButton = styled.button`
  flex: 1;
  background-color: #f3f3f3;
  color: #333;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  cursor: pointer;

  &:hover {
    background-color: #e4e4e4;
  }
`;
