import React from 'react';
import GlobalStyle from './styles/global';
import { Header } from './components/Header';
import { NewService } from './components/NewService';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <NewService />
    </>
  );
};
