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
  display: flex;
  justify-content: space-between;
  padding: 2rem 5rem;
  gap: 30px;
  width: 90%;
  margin: 0 auto;
  height: calc(100vh - 140px);

  @media (max-width: 1024px) {
    flex-direction: column;
    height: auto;
  }
`;

export const TabelaTransacoes = styled.div`
  background-color: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  overflow-y: auto;
  width: 65%;
  height: 100%;

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
    }
  }
`;

export const DetalhesConta = styled.div`
  background-color: #fff;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 30%;
  height: fit-content;
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
`;
