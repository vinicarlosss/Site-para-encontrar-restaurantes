import React from 'react';
import { Reset } from 'styled-reset';

import theme from './theme';
import Home from './pages/Home';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Reset/>
      <Home/>
    </ThemeProvider>
  );
}

export default App;
