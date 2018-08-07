/* eslint-disable no-global-assign */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { addStyle } from 'react-bootstrap/lib/utils/bootstrapUtils';
import Button from 'react-bootstrap/lib/Button';
import App from './App';
import store, { history } from './store';

require('es6-shim');

export function init() {
    addStyle(Button, 'yellow');
}

export default ReactDOM.render(
    (
        <Provider store={store}>
            <ConnectedRouter history={history} onUpdate={() => window.scrollTo(0, 0)}>
                <div>
                    <App />
                </div>
            </ConnectedRouter>
        </Provider>
    ), document.getElementById('root') || document.createElement('div'),
);

init();
