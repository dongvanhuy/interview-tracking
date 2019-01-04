/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UserAgentApplication } from 'msal';
import { push } from 'react-router-redux';
import jwt from 'jsonwebtoken';
// import { getAuthUrl } from '../../authHelper';

import { updateLoginInfo } from './LoginActions';
import { getUserDetails } from '../../GraphService';
// import { authContext } from '../../adalConfig';
import config from '../../appConfig';
import logo from '../../../src/assets/images/dxcBlack.png';

export class Login extends Component {
    constructor(props) {
        super(props);
        this.userAgentApplication = new UserAgentApplication(config.appId, null, null);
        const user = this.userAgentApplication.getUser();
        if (user) {
            this.getUserProfile();
        }
        this.state = this.initState;
    }

    async getUserProfile() {
        try {
            // Get the access token silently
            // If the cache contains a non-expired token, this function
            // will just return the cached token. Otherwise, it will
            // make a request to the Azure OAuth endpoint to get a token

            const accessToken = await this.userAgentApplication.acquireTokenSilent(config.scopes);
            if (accessToken) {
                // Get the user's profile from Graph
                const payload = jwt.decode(accessToken);
                const rsaToken = jwt.sign(payload, 'Rt6tSVHJtGd9c5neK1dST3ThSwyvNdo3hNUjHxnP5p4=');
                const user = await getUserDetails(accessToken);
                sessionStorage.setItem('accessToken', accessToken);
                sessionStorage.setItem('userName', user.displayName);
                sessionStorage.setItem('userEmail', user.userPrincipalName);
                this.setState({
                    error: null,
                    email: user.mail || user.userPrincipalName,
                    userName: user.displayName,
                    loginSuccess: true,
                    accessToken,
                    rsaToken,
                });
                this.props.updateLoginInfo(this.state);
            }
        } catch (err) {
            let error = {};
            sessionStorage.clear();
            if (typeof (err) === 'string') {
                const errParts = err.split('|');
                error = errParts.length > 1 ?
                    { message: errParts[1], debug: errParts[0] } :
                    { message: err };
            } else {
                error = {
                    message: err.message,
                    debug: JSON.stringify(err),
                };
            }
            this.setState({ error, ...this.initState }, () => {
                this.props.updateLoginInfo(this.state);
            });
        }
    }

    initState = {
        email: '',
        userName: '',
        error: null,
        loginSuccess: false,
        accessToken: null,
        rsaToken: null,
    };

    async login() {
        try {
            await this.userAgentApplication.loginPopup(config.scopes);
            await this.getUserProfile();
        } catch (err) {
            const errParts = err.split('|');
            this.setState({
                loginSuccess: false,
                error: { message: errParts[1], debug: errParts[0] },
            });
        }
    }

    render() {
        return (
            <section className="login">
                <div className="login__rightSide">
                    <div className="login__header">
                        <img src={logo} alt="logo" />
                        <h3>Interview Tracking</h3>
                    </div>
                    <div className="login__content">
                        <button type="button" onClick={() => this.login()}>
                Sign in with global pass
                        </button>
                    </div>
                    <p className="login__footer">
            © 2019 DXC Technology Company. All rights reserved.
                    </p>
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => ({
    loginStatus: state.loginUser.loginSuccess,
});

const mapDispatchToProps = {
    push,
    updateLoginInfo,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Login);
