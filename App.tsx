import React from 'react';
// import styled from 'styled-components/native';
// import { Provider } from 'react-redux';
// import { persistor, store } from './src/redux/store';
// import { PersistGate } from 'redux-persist/integration/react';
import Challenge from './src';

export default function App() {
  return <Challenge />;

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
