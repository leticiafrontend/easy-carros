import React from 'react';
import GlobalStyle from './styles/global';
import { Header } from './components/Header';
import { NewService } from './components/NewService';
import { Services } from './components/Services';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <NewService />
      <Services />
    </>
  );
};
