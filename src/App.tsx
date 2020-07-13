import React from 'react';
import {ThemeProvider} from "styled-components";
import { theme } from './utils/themes/theme';
import { Main } from './containers/Main';
import { Provider } from 'react-redux'
import { createStore } from "redux";
import {rootReducer} from "./reducers/rootReducer";

const store = createStore(rootReducer)


function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Main/>
        </ThemeProvider>
        </Provider>

  );
}

export default App;
