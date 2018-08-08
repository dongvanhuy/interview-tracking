import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.css';
import Profile from './containers/profile/Profile';
import Login from './containers/login/Login';
import ErrorPage from './containers/common/ErrorPage';
import FirstRound from './containers/firstRound/FirstRound';

class App extends Component {
    render() {
        return (
            // <div className="dip-container-fluid">
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/profile-detail" component={FirstRound} />
                <Route component={ErrorPage} />
            </Switch>
            // </div>
        );
    }
}

export default App;
