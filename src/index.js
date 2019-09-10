import React from 'react';
import AppRouter from './routes';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import RootReducer from './Reducer';

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = applyMiddleware()(createStore)(RootReducer, devTools);

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default App;
