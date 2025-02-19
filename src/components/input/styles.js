import styled from "styled-components";

export const InputStyled = styled.input`
    padding: 10px 14px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 75vh;
    margin-bottom: 16px;

    &:focus {
        outline: none;
        border-color: #3183D5;
    }
`;
export const LabelStyled = styled.label`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
  display: block;
`;