import styled from 'styled-components';

export const ModalContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 500px;
  padding: 30px;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const ModalButton = styled.button`
  width: 100%;
  padding: 14px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  font-size: 16px;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-top: 20px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;
