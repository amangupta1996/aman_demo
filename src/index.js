import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createMiddleware from 'redux-saga';
import App from './App';
import rootReducer from './store/reducers/index';
import { rootSaga } from './store/sagas/index';
import * as serviceWorker from './serviceWorker';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
const sagaMiddleware = createMiddleware();
ReactDOM.render(
    <Provider store={createStore(rootReducer, applyMiddleware(sagaMiddleware))}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
sagaMiddleware.run(rootSaga);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
serviceWorker.register();
