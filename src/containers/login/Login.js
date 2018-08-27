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

  initState = {
      email: '',
      givenName: '',
      surname: '',
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
              console.log('error', `${err}`);
          }
      } else if (user) {
          sessionStorage.setItem('surname', user.profile.family_name);
          sessionStorage.setItem('givenName', user.profile.given_name);
          this.setState(
              {
                  email: user.profile.unique_name,
                  givenName: user.profile.given_name,
                  surname: user.profile.family_name,
                  loginSuccess: true,
              },
              () => {
                  this.props.updateLoginInfo(this.state);
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
                  <h3>Welcome to Interview Tracking</h3>
                  <button type="button" onClick={e => this.login(e)}>
            Sign in with global pass
                  </button>
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
