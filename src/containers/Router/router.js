import React, { Component } from 'react';
import { Route, withRouter, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { UserAgentApplication } from 'msal';
import Login from '../login/Login';
import config from '../../appConfig';
import Profile from '../profile/Profile';
import ProfileInfo from '../profileDetails/ProfileInfo';
import Header from '../header/header';
import { updateLoginInfo } from '../login/LoginActions';

export class Routes extends Component {
    constructor(props) {
        super(props);
        this.userAgentApplication = new UserAgentApplication(config.appId, null, null);
        const user = this.userAgentApplication.getUser();
        const accessToken = sessionStorage.getItem('accessToken');
        const userName = sessionStorage.getItem('userName');
        const email = sessionStorage.getItem('userEmail');
        if (user && accessToken) {
            // Enhance user object with data from Graph
            this.props.updateLoginInfo({
                loginSuccess: true,
                accessToken,
                email,
                userName,
            });
        }
    }
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
    accessToken: state.loginUser.accessToken,
});

export default withRouter(connect(mapStateToProps, { updateLoginInfo })(Routes));
