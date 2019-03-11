/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { UserAgentApplication } from 'msal';
import { push } from 'react-router-redux';
import jwt from 'jsonwebtoken';
import { authContext } from '../../adalConfig';
// import { getAuthUrl } from '../../authHelper';

import { updateLoginInfo } from './LoginActions';
// import { authContext } from '../../adalConfig';
import config from '../../config';
import logo from '../../../src/assets/images/dxcBlack.png';


export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = this.initState;
    }

    componentDidMount() {
        this.loadUser();
    }

    initState = {
        email: '',
        userName: '',
        error: null,
        loginSuccess: false,
        accessToken: null,
        rsaToken: null,
    };

    loadUser = () => {
        const user = authContext.getCachedUser();
        if (authContext.isCallback(window.location.hash)) {
        // Handle redirect after token requests
            authContext.handleWindowCallback();
            const err = authContext.getLoginError();
            if (err) {
                // TODO: Handle errors signing in and getting tokens
                // console.log('error', `${err}`);
            }
        } else if (user) {
            sessionStorage.setItem('userName', user.profile.name);
            sessionStorage.setItem('userEmail', user.userName);
            // Get an access token to the Microsoft Graph API
            authContext.acquireToken(
                'https://graph.microsoft.com',
                 (error, token) => {
                    // if (error || !token) {
                    //     // TODO: Handle error obtaining access token
                    //     console.log(error);
                    //     return;
                    // }
                    //const payload = jwt.decode(token);
                    //const rsaToken = jwt.sign(payload, config.secretKey);
                    // Use the access token
                    sessionStorage.setItem('accessToken', token);
                    this.setState(
                        {
                            email: user.profile.email,
                            userName: user.profile.name,
                            loginSuccess: true,
                            accessToken: token,
                            // rsaToken,
                        },
                        () => {
                            this.props.updateLoginInfo(this.state);
                        },
                    );
                }
            );
        } else {
            sessionStorage.clear();
            this.setState({ ...this.initState }, () => {
                this.props.updateLoginInfo(this.state);
            });
        }
    };

    login = e => {
        e.preventDefault();
        authContext.login();
    };

    render() {
        return (
            <section className="login">
                <div className="login__rightSide">
                    <div className="login__header">
                        <img src={logo} alt="logo" />
                        <h3>Interview Tracking</h3>
                    </div>

                    <div className="login__content">
                        <button type="button" onClick={(e) => this.login(e)}>
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
