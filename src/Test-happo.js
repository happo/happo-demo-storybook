import styled, { ThemeProvider } from 'styled-components';
import React from 'react';

const Label = styled.div`
  border: 1px solid blue;
  display: inline-block;
`;

export default () => (
  <ThemeProvider theme={{ fg: 'blue' }}>
    <Label>Test</Label>
  </ThemeProvider>
);
