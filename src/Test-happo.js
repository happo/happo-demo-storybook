import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import React from 'react';

const GlobalStyle = createGlobalStyle`
  body {
    color: red;
  }
`;

const Label = styled.div`
  border: 1px solid blue;
  display: inline-block;
`;

export default () => (
  <ThemeProvider theme={{ fg: 'blue' }}>
    <React.Fragment>
      <GlobalStyle />
      <Label>Test</Label>
    </React.Fragment>
  </ThemeProvider>
);
