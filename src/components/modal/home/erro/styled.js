import styled from 'styled-components';

export const ErrorModalContainer = styled.div`
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

export const ErrorContent = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h3 {
    font-size: 24px;
    font-weight: bold;
    margin: 20px 0 10px;
  }

  p {
    font-size: 14px;
    margin-bottom: 20px;
  }
`;

export const ErrorIcon = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 20px;
`;

export const ErrorButton = styled.button`
  padding: 12px 30px;
  background-color: #ff4d4f;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #d9363e;
  }
`;

// ✅ Componente de Status incorporado aqui
export const StatusBadge = styled.div`
  display: inline-block;
  padding: 5px 15px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: bold;
  color: white;
  background-color: ${({ status }) =>
    status === 'Concluído' ? '#007AFF' : '#FF6B6B'}; 
`;
