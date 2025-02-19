import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const LeftSide = styled.div`
  flex: 1;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  
  h1 {
    font-size: 20px;
    font-weight: bold;
    color:black;
    margin-bottom: 1.5rem;
    margin-right: 12.5rem;
  }

  p {
    font-size: 14px;
    margin-top: 2rem;
    color: #333;

    a {
      color: #5D9CDB;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const RightSide = styled.div`
  flex: 1;
  background-image: url('/src/assets/img-principal.png');
  background-size: cover;
  background-position: center;
`;