import React from "react";
import { ButtonStyled } from "./styles";

function Button({ children, ...props }){
    return(
        <ButtonStyled {...props}>{children}</ButtonStyled>
    )
}

export default Button;