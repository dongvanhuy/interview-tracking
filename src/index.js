// import { runWithAdal } from 'react-adal';
// import { authContext } from './adalConfig';

// const DO_NOT_LOGIN = false;

// runWithAdal(authContext, () => {
//     sessionStorage.setItem('email', authContext._user.userName);
//     sessionStorage.setItem('family_name', authContext._user.profile.family_name);
//     sessionStorage.setItem('given_name', authContext._user.profile.given_name);
//     // eslint-disable-next-line
//     require('./indexApp.js');
// }, DO_NOT_LOGIN);

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import App from './App';
import store, { history } from './store';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

require('es6-shim');


export default ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history} onUpdate={() => window.scrollTo(0, 0)}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementsByClassName('root')[0] || document.createElement('div'),
);
