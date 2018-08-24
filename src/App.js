import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.css';
import Profile from './containers/profile/Profile';
import Login from './containers/login/Login';
import ErrorPage from './containers/common/errorPage/ErrorPage';
import ProfileDetails from './containers/profileDetails/ProfileDetails';
import Header from './containers/header/header';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <main>
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route exact path="/profile" component={Profile} />
                        <Route exact path="/profile-detail" component={ProfileDetails} />
                        <Route component={ErrorPage} />
                    </Switch>
                </main>
            </React.Fragment>
        );
    }
}

export default App;
