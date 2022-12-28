import React from 'react';
import { ThemeProvider } from 'styled-components';
// import styled from 'styled-components/native';
// import { Provider } from 'react-redux';
// import { persistor, store } from './src/redux/store';
// import { PersistGate } from 'redux-persist/integration/react';
import Challenge from './src';
import { theme } from './src/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Challenge />
    </ThemeProvider>
  );

  // return (
  //   <Provider store={store}>
  //     <PersistGate persistor={persistor} loading={null}>
  //       <AppContainer>
  //         <Challenge/>
  //       </AppContainer>
  //     </PersistGate>
  //   </Provider>
  // );
}
