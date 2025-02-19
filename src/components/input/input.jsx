import React from "react";
import { InputStyled, LabelStyled } from "./styles";

function Input({ label, type, placeholder, error, ...rest }) {
  return (
    <LabelStyled>
      <h5>{label}</h5>
      <InputStyled type={type} placeholder={placeholder} {...rest} />
      {error && <p style={{ color: 'red' }}>{error.message}</p>}
    </LabelStyled>
  );
}

export default Input;
