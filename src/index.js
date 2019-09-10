import React from 'react';
import AppRouter from './routes';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createSagasMiddleware from 'redux-saga';
import rootSaga from './Sagas';
import RootReducer from './Reducer';

const create = () => {
  const devTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();

  const sagaMiddleware = createSagasMiddleware();
  const middleware = applyMiddleware(sagaMiddleware)(createStore)(
    RootReducer,
    devTools,
  );

  sagaMiddleware.run(rootSaga);

  return middleware;
};

const store = create();

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default App;
