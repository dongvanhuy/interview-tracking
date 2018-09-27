import React, { Component } from 'react';
import { Route, withRouter, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Login from '../login/Login';
import Profile from '../profile/Profile';
import ProfileInfo from '../profileDetails/ProfileInfo';
// import ProfileDetails from '../profileDetails/ProfileDetails';
import Header from '../header/header';

export class Routes extends Component {
    render() {
        const login = (
            <Switch>
                <Route path="/" component={Login} />
            </Switch>
        );

        const loginSuccess = (
            <React.Fragment>
                <Header />
                <Switch>
                    <Route exact path="/profile" component={Profile} />
                    <Route
                        exact
                        path="/profile-info/:profileId"
                        component={ProfileInfo}
                    />
                    <Route exact path="/profile-info/" component={ProfileInfo} />
                    <Redirect to="/profile" />
                </Switch>
                <p className="footer-info text-center container">© 2018 DXC Technology Company. All rights reserved.</p>
            </React.Fragment>
        );

        return (
            <React.Fragment>
                {this.props.loginStatus ? loginSuccess : login}
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    loginStatus: state.loginUser.loginSuccess,
});

export default withRouter(connect(mapStateToProps)(Routes));
