import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { updateLoginInfo } from './LoginActions';
import { authContext } from '../../adalConfig';
import logo from '../../../src/assets/images/dxcBlack.png';

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = this.initState;
    }

    componentDidMount() {
        this.loadUser();
    }

    // getCurrentUser = (accessToken) => {
    //     const xhr = new XMLHttpRequest();
    //     xhr.open('GET', 'https://graph.microsoft.com/v1.0/me', true);
    //     xhr.setRequestHeader('Authorization', `Bearer ${accessToken}`);
    //     xhr.onreadystatechange = () => {
    //         if (xhr.readyState === 4 && xhr.status === 200) {
    //             // Do something with the response
    //             // console.log('xhr.responseText', xhr.responseText);
    //             // document.getElementById('api_response').textContent =
    //             //     JSON.stringify(JSON.parse(xhr.responseText), null, '  ');
    //         } else {
    //             // TODO: Do something with the error (or non-200 responses)
    //             // document.getElementById('api_response').textContent =
    //             //     `ERROR:\n\n${xhr.responseText}`;
    //         }
    //     };
    //     xhr.send();
    // }

    initState = {
        email: '',
        userName: '',
        loginSuccess: false,
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
            this.setState(
                {
                    email: user.profile.email,
                    userName: user.profile.name,
                    loginSuccess: true,
                },
                () => {
                    this.props.updateLoginInfo(this.state);
                },
            );
            // Get an access token to the Microsoft Graph API
            authContext.acquireToken(
                'https://graph.microsoft.com',
                (error, token) => {
                    if (error || !token) {
                        // TODO: Handle error obtaining access token
                        document.getElementById('api_response').textContent =
                            `ERROR:\n\n${error}`;
                        return;
                    }
                    // Use the access token
                    sessionStorage.setItem('accessToken', token);
                },
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
        if (this.props.loginStatus) {
            this.props.push('/profile');
        }
        return (
            <section className="login">
                <div className="login__rightSide">
                    <div className="login__header">
                        <img src={logo} alt="logo" />
                        <h3>Interview Tracking</h3>
                    </div>
                    <div className="login__content">
                        <button type="button" onClick={e => this.login(e)}>
                Sign in with global pass
                        </button>
                    </div>
                    <p className="login__footer">
            © 2018 DXC Technology Company. All rights reserved.
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
