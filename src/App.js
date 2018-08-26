import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Redirect, Switch } from 'react-router-dom';
import './styles/index.css';

import Header from '../src/containers/header/header';
import Login from '../src/containers/login/Login';
import ProfileDetails from '../src/containers/profileDetails/ProfileDetails';
import Profile from '../src/containers/profile/Profile';
import ProfileInfo from '../src/containers/profileDetails/ProfileInfo';


class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/profile-details" component={ProfileDetails} />
                    <Route exact path="/profile-info" component={ProfileInfo} />
                    <Redirect to="/" />
                </Switch>
            </React.Fragment>
        );
    }
}

export default App;
