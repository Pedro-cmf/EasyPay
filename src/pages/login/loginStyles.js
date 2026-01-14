import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: black;
  margin-bottom: 1.8rem;
  margin-left: 0;

`;

export const LeftSide = styled.div`
  flex: 1;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  

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

// styled.js
export const LinkButton = styled.button`
  background: none;
  border: none;
  color: #5D9CDB;
  cursor: pointer;
  padding: 0;
  font-size: inherit;
  font-family: inherit;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.error};
  font-size: 12px;
  margin-top: 4px;
  margin-bottom: 8px;
`;
