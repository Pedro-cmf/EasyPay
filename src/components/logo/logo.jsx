import React from 'react';
import logo from '../../assets/logo.png';
import { LogoStyled } from './styles';

function Logo({ width = '40vh', marginRight = '0.5rem', marginTop = '0.5rem'}) {
  return (
    <LogoStyled
      src={logo}
      alt="Logo"
      width={width}
      marginRight={marginRight}
      marginTop={marginTop}
      
    />
  );
}

export default Logo;
