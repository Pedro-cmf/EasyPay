import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 130px;
  background-color: #f5f5f5;
`;

export const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 300px; 
  gap: 30px;
  width: 90%;
  margin: 0 auto;
  height: calc(100vh - 140px);

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    height: auto;
  }
`;

export const TabelaTransacoes = styled.div`
  background-color: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  overflow-y: auto;
  height: 76%;

  h3 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 15px;
  }

  table {
    width: 100%;
    border-collapse: collapse;

    th, td {
      padding: 12px;
      text-align: center;
      border-bottom: 1px solid #eaeaea;
    }

    th {
      font-weight: bold;
      background-color: #f9f9f9;
      position: sticky;
      top: 0;
      z-index: 1;
    }

    tbody tr:hover {
      background-color: #f1f1f1;
      transition: background-color 0.2s ease;
    }
  }
`;

export const DetalhesConta = styled.div`
  background-color: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: sticky;
  top: 130px;

  h4 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    color: #555;
  }

  span {
    color: #007aff;
    font-weight: bold;
  }
`;

export const InfoConta = styled(DetalhesConta)`
  margin-top: 20px;
`;

export const StatusBadge = styled.span`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 15px;
  color: white;
  font-weight: bold;
  background-color: ${({ status }) => (status === 'Concluído' ? '#007aff' : '#ff4d4f')};
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
`;