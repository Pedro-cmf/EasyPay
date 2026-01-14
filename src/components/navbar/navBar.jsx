import { useNavigate, useLocation } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { BsCurrencyDollar } from 'react-icons/bs';
import { BiTime } from 'react-icons/bi';
import { FiLogOut } from 'react-icons/fi';
import Logo from '../logo/logo';
import {
  NavContainer,
  LogoArea,
  NavLinks,
  NavButton,
  LogoutArea,
  UserGreeting,
  LogoutButton,
} from './styled';

function Navbar({ user, handleLogout }) {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: '/home', label: 'Início', icon: AiOutlineHome },
    { path: '/transferencia', label: 'Transferir', icon: BsCurrencyDollar },
    { path: '/transacoes', label: 'Transações', icon: BiTime },
  ];

  return (
    <NavContainer>
      <LogoArea>
        <Logo width="120px" />
      </LogoArea>

      <NavLinks>
        {navItems.map(({ path, label, icon: Icon }) => (
          <NavButton
            key={path}
            $active={location.pathname === path}
            onClick={() => navigate(path)}
          >
            <Icon />
            <span>{label}</span>
          </NavButton>
        ))}
      </NavLinks>

      <LogoutArea>
        <UserGreeting>
          Olá, <strong>{user?.name || 'Usuário'}</strong>
        </UserGreeting>
        <LogoutButton onClick={handleLogout}>
          <FiLogOut />
          Sair
        </LogoutButton>
      </LogoutArea>
    </NavContainer>
  );
}

export default Navbar;
