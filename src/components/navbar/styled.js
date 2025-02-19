import styled from 'styled-components';

export const NavContainer = styled.div`
  width: 100%;
  height: 22%;
  position: fixed;
  top: 0;
  background-color: #007aff;
  color: white;
  display: flex;
  flex-direction: column; /* Empilha logo e botões */
  align-items: flex-start;
  padding: 15px 50px; /* Espaço lateral para alinhar com o modal */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

export const Logo = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px; /* Espaço entre logo e botões */
  margin-left: 10px;   /* Alinha a logo com o modal */
  span {
    color: #00d1b2;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-left: 10px;  /* Ajusta os botões para alinhar com o modal */
`;

export const NavButton = styled.button`
  background: ${({ $active }) => ($active ? 'white' : 'transparent')};
  color: ${({ $active }) => ($active ? '#007aff' : 'white')};
  padding: 10px 20px;
  border-radius: 10px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background-color: white;
    color: #007aff;
  }
`;

export const LogoutButton = styled.button`
  position: absolute;
  right: 50px;
  top: 20px;
  background-color: white;
  color: #007aff;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f1f1f1;
  }
`;
