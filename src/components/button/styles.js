import styled, { css } from 'styled-components';

const variants = {
  primary: css`
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, ${({ theme }) => theme.colors.primaryHover} 100%);
    color: white;

    &:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 122, 255, 0.4);
    }

    &:active:not(:disabled) {
      transform: translateY(0);
    }
  `,
  secondary: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.primary};
    border: 2px solid ${({ theme }) => theme.colors.primary};

    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.primary};
      color: white;
    }
  `,
  ghost: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.textLight};

    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.background};
      color: ${({ theme }) => theme.colors.text};
    }
  `,
  danger: css`
    background: ${({ theme }) => theme.colors.error};
    color: white;

    &:hover:not(:disabled) {
      background: #e04040;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(255, 77, 79, 0.4);
    }
  `,
};

const sizes = {
  sm: css`
    padding: 8px 16px;
    font-size: ${({ theme }) => theme.fontSize.sm};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
  `,
  md: css`
    padding: 12px 24px;
    font-size: ${({ theme }) => theme.fontSize.md};
    border-radius: ${({ theme }) => theme.borderRadius.md};
  `,
  lg: css`
    padding: 16px 32px;
    font-size: ${({ theme }) => theme.fontSize.lg};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
  `,
};

export const ButtonStyled = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  transition: all ${({ theme }) => theme.transition.normal};
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};

  ${({ $variant = 'primary' }) => variants[$variant]}
  ${({ $size = 'md' }) => sizes[$size]}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none !important;
    box-shadow: none !important;
  }
`;
