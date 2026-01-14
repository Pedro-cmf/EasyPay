import styled from 'styled-components';

export const NavContainer = styled.nav`
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, #0056b3 100%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  box-shadow: ${({ theme }) => theme.shadow.lg};
  z-index: 1000;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 20px;
  }
`;

export const LogoArea = styled.div`
  display: flex;
  align-items: center;
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 4px;
  }
`;

export const NavButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background: ${({ $active }) => $active ? 'rgba(255, 255, 255, 0.2)' : 'transparent'};
  color: ${({ $active }) => $active ? 'white' : 'rgba(255, 255, 255, 0.8)'};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: all ${({ theme }) => theme.transition.fast};

  svg {
    font-size: 18px;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    color: white;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 8px 12px;
    font-size: ${({ theme }) => theme.fontSize.xs};

    span {
      display: none;
    }
  }
`;

export const LogoutArea = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const UserGreeting = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: ${({ theme }) => theme.fontSize.sm};

  strong {
    color: white;
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.15);
  color: white;
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  backdrop-filter: blur(4px);
  transition: all ${({ theme }) => theme.transition.fast};

  &:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: translateY(-1px);
  }
`;
