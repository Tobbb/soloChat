import React from 'react';
import {ThemeProvider} from "styled-components";
import { theme } from './utils/themes/theme';
import { MainContainer } from './containers/Main';
function App() {
  return (
      <ThemeProvider theme={theme}>
        <MainContainer/>
        </ThemeProvider>

  );
}

export default App;
