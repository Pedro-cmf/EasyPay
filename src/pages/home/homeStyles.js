import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f4f6f8;
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 160px;
`;

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 20px auto;
  width: 90%;
  gap: 40px;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const TabelaTransacoes = styled.div`
  flex: 3;
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  table {
    width: 100%;
    border-collapse: collapse;

    th, td {
      padding: 12px;
      text-align: center;
      border-bottom: 1px solid #f0f0f0;
    }

    th {
      font-weight: bold;
      background-color: #f9f9f9;
    }

    tbody tr:hover {
      background-color: #f1f1f1;
    }
  }
`;

export const DetalhesConta = styled.div`
  flex: 1;
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 15px;

  h4 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    color: #555;
    line-height: 1.5;
  }
`;

export const InfoConta = styled.div`
  width: 100%;
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 15px;

  p {
    font-size: 16px;
    color: #555;
    line-height: 1.5;
  }
`;

export const Status = styled.span`
  display: inline-block;
  padding: 5px 15px;
  border-radius: 15px;
  font-size: 14px;
  font-weight: bold;
  color: white;
  background-color: ${({ status }) =>
    status === 'Concluído' ? '#28a745' : status === 'Erro' ? '#dc3545' : '#6c757d'};
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 100px;
  z-index: 101;
`;

export const ModalContent = styled.div`
  background-color: white;
  border-radius: 10px;
  width: 80%;
  padding: 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SaldoContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  span {
    font-size: 16px;
    color: #777;
  }

  p {
    font-size: 24px;
    font-weight: bold;
    color: #007aff;
  }
`;

export const Header = styled.header`
  width: 100%;
  height: 120px;
  background-color: #007aff;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 20px 40px;
  position: fixed;
  top: 0;
  z-index: 100;

  nav {
    display: flex;
    gap: 30px;

    a {
      color: white;
      font-weight: bold;
      text-decoration: none;
      padding-bottom: 5px;

      &.active,
      &:hover {
        border-bottom: 2px solid white;
      }
    }
  }

  button {
    background-color: white;
    color: #007aff;
    border: none;
    border-radius: 8px;
    padding: 10px 20px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background-color: #f1f1f1;
    }
  }
`;
