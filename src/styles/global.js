import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Ubuntu', sans-serif;
  }

  button,
  input{
    outline: 0;
  }

  button{
    cursor: pointer;
    transition: background-color .3s ease-in-out;
  }
`;
