import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;

  h1 {
    font-size: 28px;
  }

  button {
    background-color: white;
    color: ${({ theme }) => theme.colors.primary};
    padding: 10px 20px;
    border-radius: ${({ theme }) => theme.borderRadius};
    border: none;
    font-weight: bold;

    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary};
      color: white;
    }
  }
`;
