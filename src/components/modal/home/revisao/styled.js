import styled from 'styled-components';

export const RevisaoModalContainer = styled.div`
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

export const RevisaoContent = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  width: 450px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  text-align: center;

  h3 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const InfoLabel = styled.span`
  font-weight: bold;
  color: #333;
`;

export const InfoValue = styled.span`
  color: #555;
`;

export const RevisaoButton = styled.button`
  padding: 12px 30px;
  background-color: ${({ variant }) => (variant === 'back' ? '#f0f0f0' : '#007aff')};
  color: ${({ variant }) => (variant === 'back' ? '#333' : 'white')};
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 45%;

  &:hover {
    background-color: ${({ variant }) => (variant === 'back' ? '#d9d9d9' : '#005bb5')};
  }
`;
