import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.css';
import Profile from './containers/profile/Profile';
import Login from './containers/login/Login';
import ErrorPage from './containers/common/errorPage/ErrorPage';
import ProfileDetails from './containers/profileDetails/ProfileDetails';
import ProfileInfo from './containers/profileDetails/ProfileInfo';

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/profile-detail" component={ProfileDetails} />
                <Route exact path="/new-profile" conponent={ProfileInfo} />
                <Route component={ErrorPage} />
            </Switch>
        );
    }
}

export default App;
