import React from 'react';
import logo from '../../assets/logo.png';
import { LogoStyled } from './styles';

function Logo({ width = '40vh', marginRight = '10.5rem', marginTop = '1rem', marginBottom = '3rem' }) {
  return (
    <LogoStyled
      src={logo}
      alt="SeaPay Logo"
      width={width}
      marginRight={marginRight}
      marginTop={marginTop}
      marginBottom={marginBottom}
    />
  );
}

export default Logo;
