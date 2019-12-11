import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { configureStore, persistor } from './Redux/Store';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './assets/css/main.css'

ReactDOM.render(
    <Provider store={configureStore}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
