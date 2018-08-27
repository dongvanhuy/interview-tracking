import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import App from './App';
import store, { history } from './store';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { initializeFirebase } from './push-notification';

require('es6-shim');


export default ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history} onUpdate={() => window.scrollTo(0, 0)}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementsByClassName('root')[0] || document.createElement('div'),
);
initializeFirebase();
