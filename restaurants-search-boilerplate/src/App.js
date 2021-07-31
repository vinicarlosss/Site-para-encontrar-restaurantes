import React from 'react';
import { Provider } from 'react-redux';
import { Reset } from 'styled-reset';

import store from './redux/store';
import theme from './theme';
import Home from './pages/Home';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Reset/>
        <Home/>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
