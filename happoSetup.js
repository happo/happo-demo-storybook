import { createGlobalStyle } from 'styled-components';
import React from 'react';
import ReactDOM from 'react-dom';

const GlobalStyle = createGlobalStyle`
  body {
    color: red;
  }
`;

ReactDOM.render(
  <GlobalStyle />,
  document.head,
);
