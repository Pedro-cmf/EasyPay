import React from 'react';
import { NavContainer, Logo, NavLinks, NavButton, LogoutButton } from './styled';

function Navbar({ activeSection, setActiveSection, handleLogout }) {
    return (
      <NavContainer>
        <Logo>
          sea<span>Pay</span>
        </Logo>
        <NavLinks>
          <NavButton
            active={activeSection === 'inicio'}
            onClick={() => setActiveSection('inicio')}
          >
            Início
          </NavButton>
  
          <NavButton
            active={activeSection === 'transferencia'}
            onClick={() => setActiveSection('transferencia')}
          >
            Transferência
          </NavButton>
  
          <NavButton $active={activeSection === 'transferencia'} onClick={() => setActiveSection('transferencia')}>
  Transferência
</NavButton>
        </NavLinks>
  
        <LogoutButton onClick={handleLogout}>Sair</LogoutButton>
      </NavContainer>
    );
  }
  
  export default Navbar;
