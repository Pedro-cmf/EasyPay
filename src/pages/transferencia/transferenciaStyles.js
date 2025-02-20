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

export const TransferContainer = styled.div`
  width: 65%;
  background-color: #fff;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 20px;

  h2 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }
`;


export const StepIndicator = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 0 20%;

  .step {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: bold;
    color: #ccc;

    .circle {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #ddd;
      color: white;
      font-weight: bold;
      transition: background-color 0.3s ease;
      margin-bottom: 8px;
    }

    &.active,
    &.completed {
      color: #007aff;
      .circle {
        background-color: #007aff;
      }
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
