import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 90px;
  padding-bottom: 70px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 24px;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 24px;
  flex: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
    max-width: 600px;
  }
`;

export const TabelaTransacoes = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 32px;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadow.md};

  h3 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    gap: 10px;

    &::before {
      content: '';
      width: 4px;
      height: 24px;
      background: linear-gradient(180deg, ${({ theme }) => theme.colors.primary} 0%, #0056b3 100%);
      border-radius: 2px;
    }
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
`;

export const StepIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 32px;
`;

export const Step = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  .number {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    background-color: ${({ theme, $active, $completed }) =>
      $completed ? theme.colors.success : $active ? theme.colors.primary : theme.colors.border};
    color: ${({ $active, $completed }) => ($active || $completed ? 'white' : '#999')};
    transition: all ${({ theme }) => theme.transition.normal};
  }

  .label {
    font-size: ${({ theme }) => theme.fontSize.sm};
    color: ${({ theme, $active }) => $active ? theme.colors.text : theme.colors.textMuted};
    font-weight: ${({ $active }) => $active ? '500' : '400'};
  }
`;

export const StepDivider = styled.div`
  flex: 1;
  height: 2px;
  background-color: ${({ theme, $completed }) =>
    $completed ? theme.colors.success : theme.colors.border};
  max-width: 60px;
`;

export const RecipientCard = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: 16px;
  margin-bottom: 20px;
  border-left: 4px solid ${({ theme }) => theme.colors.primary};

  p {
    margin: 0;

    &:first-child {
      font-weight: ${({ theme }) => theme.fontWeight.semibold};
      color: ${({ theme }) => theme.colors.text};
      font-size: ${({ theme }) => theme.fontSize.md};
      margin-bottom: 4px;
    }

    &:last-child {
      font-size: ${({ theme }) => theme.fontSize.sm};
      color: ${({ theme }) => theme.colors.textMuted};
    }
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 24px;
`;

export const ErrorAlert = styled.div`
  background-color: ${({ theme }) => theme.colors.errorLight};
  color: ${({ theme }) => theme.colors.error};
  padding: 12px 16px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin-bottom: 20px;
  font-size: ${({ theme }) => theme.fontSize.sm};
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const DetalhesConta = styled.aside`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 24px;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadow.md};
  height: fit-content;
  position: sticky;
  top: 90px;

  h4 {
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 20px;
    padding-bottom: 12px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.background};
  }

  p {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSize.sm};
    color: ${({ theme }) => theme.colors.textLight};
    padding: 12px 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};

    &:last-child {
      border-bottom: none;
    }
  }
`;

export const AccountValue = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  color: ${({ theme, $highlight }) => $highlight ? theme.colors.success : theme.colors.text};
  font-size: ${({ $large }) => $large ? '1.25rem' : 'inherit'};
`;
