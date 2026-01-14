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
    max-width: 800px;
  }
`;

export const TabelaTransacoes = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 24px;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadow.md};
  overflow: hidden;
  display: flex;
  flex-direction: column;

  h3 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 20px;
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

  > p {
    color: ${({ theme }) => theme.colors.textMuted};
    text-align: center;
    padding: 40px 0;
  }

  table {
    width: 100%;
    border-collapse: collapse;

    th, td {
      padding: 14px 16px;
      text-align: left;
    }

    th {
      font-size: ${({ theme }) => theme.fontSize.xs};
      font-weight: ${({ theme }) => theme.fontWeight.semibold};
      color: ${({ theme }) => theme.colors.textMuted};
      text-transform: uppercase;
      letter-spacing: 0.5px;
      background-color: ${({ theme }) => theme.colors.background};
      border-bottom: 2px solid ${({ theme }) => theme.colors.border};
    }

    td {
      font-size: ${({ theme }) => theme.fontSize.sm};
      color: ${({ theme }) => theme.colors.text};
      border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    }

    tbody tr {
      transition: background-color ${({ theme }) => theme.transition.fast};

      &:hover {
        background-color: ${({ theme }) => theme.colors.background};
      }

      &:last-child td {
        border-bottom: none;
      }
    }
  }
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

export const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  background-color: ${({ theme, $status }) =>
    $status === 'Concluído' ? theme.colors.successLight : theme.colors.errorLight};
  color: ${({ theme, $status }) =>
    $status === 'Concluído' ? theme.colors.success : theme.colors.error};
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  color: ${({ theme }) => theme.colors.textMuted};

  svg {
    font-size: 48px;
    margin-bottom: 16px;
    opacity: 0.5;
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.md};
  }
`;
