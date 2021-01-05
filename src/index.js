// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import createMiddleware from 'redux-saga';
// import App from './App';
// import rootReducer from './store/reducers/index';
// const sagaMiddleware = createMiddleware();

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store, persistor, sagaMiddleware } from "./store/configureStore";

// import rootSaga from './sagas'
import { rootSaga } from "./store/sagas/index";

import * as serviceWorker from "./serviceWorker";
import { PersistGate } from "redux-persist/integration/react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import "./style.scss";
import App from "./App";

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
sagaMiddleware.run(rootSaga);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
