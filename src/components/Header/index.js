import React from 'react';
import { Container } from '../../styles/container';
import { HeaderStyle, Logo } from './style';
import logo from '../../images/logo.svg';

export const Header = () => {
  return (
    <HeaderStyle>
      <Container>
        <Logo src={logo} alt="Easy Carros" />
      </Container>
    </HeaderStyle>
  );
};
