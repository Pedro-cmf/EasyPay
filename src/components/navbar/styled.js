import styled from 'styled-components';

export const NavContainer = styled.div`
  width: 100%;
  height: 130px;
  position: fixed;
  top: 0;
  background-color: #5D9CDB;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 15px 50px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 2000;
  isolation: isolate;
`;

export const Logo = styled.h2`
  height: 50px;
  width: auto;   
  margin-right: ${({ marginRight }) => marginRight || '0'};
  margin-top: ${({ marginTop }) => marginTop || '0'};
  margin-bottom: ${({ marginBottom }) => marginBottom || '0'};
  cursor: pointer;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-left: 10px;
  z-index: 100;
`;

export const NavButton = styled.button`
  background: transparent;
  color: ${({ $active }) => ($active ? 'white' : 'rgba(255, 255, 255, 0.6)')};
  padding: 10px 20px;
  border: none;
  border-radius: 0;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease-in-out;

  &:after {
    content: '';
    position: absolute;
    height: 3px;
    width: ${({ $active }) => ($active ? '100%' : '0%')};
    background-color: white;
    bottom: 0;
    left: 0;
    transition: width 0.3s ease-in-out;
  }

  &:hover:after {
    width: 100%;
  }

  &:hover {
    color: white;
  }
`;

export const LogoutButton = styled.button`
  background-color: white;
  color: #007aff;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
`;

export const LogoutArea = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  position: absolute;
  right: 40px;
  top: 30px;

  p {
    color: white;
    font-weight: bold;
    font-size: 16px;
  }
`;