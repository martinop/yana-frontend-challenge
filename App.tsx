require('dayjs/locale/es');

import React from 'react';
import dayjs from 'dayjs';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { persistor, store } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import Challenge from './src';
import { theme } from './src/theme';
import { StatusBar } from 'react-native';

dayjs.locale('es');

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <ThemeProvider theme={theme}>
          <StatusBar />
          <Challenge />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
