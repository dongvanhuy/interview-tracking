import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.css';
import Profile from './containers/profile/Profile';
import Login from './containers/login/Login';
import ErrorPage from './containers/common/errorPage/ErrorPage';
import ProfileDetails from './containers/profileDetails/ProfileDetails';
import logo from '../src/assets/images/dxcLogo.svg';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <header className="interview-header">
                    <section className="container interview-header__content">
                        <div className="interview-header__logo">
                            <img src={logo} alt="logo" />
                            <span className="interview-header__title">Interview Tracking</span>
                        </div>
                        <div className="interview-header__info">
                            <i className="fa fa-user fa-2x" />
                        </div>
                    </section>
                </header>
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
