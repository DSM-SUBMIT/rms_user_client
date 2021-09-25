import React from 'react';
import GlobalStyle from './style/globalStyle';
import MainRouter from './route/MainRouter';
import { Provider } from 'react-redux';
import store from './modules/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <MainRouter />
    </Provider>
  );
};

export default App;
