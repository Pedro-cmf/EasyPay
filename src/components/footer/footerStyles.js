import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, #0056b3 100%);
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  padding: 16px 20px;
  font-size: ${({ theme }) => theme.fontSize.xs};
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  span {
    opacity: 0.7;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 11px;
    padding: 12px 16px;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 8px;
  }
`;

export const FooterLink = styled.a`
  color: rgba(255, 255, 255, 0.8);
  transition: color ${({ theme }) => theme.transition.fast};

  &:hover {
    color: white;
  }
`;
