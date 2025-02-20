import React from 'react';
import { NavContainer, NavButton, NavLinks, LogoutArea, LogoutButton } from "./styled";
import Logo from "../../components/logo/logo";
import { AiOutlineHome } from 'react-icons/ai';
import { BsCurrencyDollar } from 'react-icons/bs';
import { BiTime } from 'react-icons/bi';
import { useNavigate, useLocation } from 'react-router-dom';

function Navbar({ usuario, handleLogout }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <NavContainer>
      <Logo width="15vh" marginRight="5rem" marginTop="0.5rem" marginBottom="1rem" />
      <NavLinks>
        <NavButton $active={location.pathname === '/home'} onClick={() => navigate('/home')}>
          <AiOutlineHome size={20} /> Início
        </NavButton>
        <NavButton $active={location.pathname === '/transferencia'} onClick={() => navigate('/transferencia')}>
          <BsCurrencyDollar size={20} /> Transferência
        </NavButton>
        <NavButton $active={location.pathname === '/transacoes'} onClick={() => navigate('/transacoes')}>
          <BiTime size={20} /> Transações
        </NavButton>
      </NavLinks>
      <LogoutArea>
        <p>Olá, <strong>{usuario?.name || 'Usuário'}</strong>!</p>
        <LogoutButton onClick={handleLogout}>Sair</LogoutButton>
      </LogoutArea>
    </NavContainer>
  );
}

export default Navbar;
