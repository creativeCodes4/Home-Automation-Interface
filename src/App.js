import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './themes/theme';
import { GlobalStyles } from './global';
import Wrapper from './Components/Wrapper';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Wrapper />
      </>
    </ThemeProvider>
  );
}

export default App;
