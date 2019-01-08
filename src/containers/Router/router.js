import React, { Component } from 'react';
import { Route, withRouter, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Login from '../login/Login';
import Profile from '../profile/Profile';
import ProfileInfo from '../profileDetails/ProfileInfo';
import Header from '../header/header';
import { updateLoginInfo } from '../login/LoginActions';

export class Routes extends Component {
    render() {
        if (this.props.loginStatus) {
            return (
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
                    <p className="footer-info text-center container">© 2019 DXC Technology Company. All rights reserved.</p>
                </React.Fragment>
            );
        }
        return (
            <Switch>
                <Route path="/" component={Login} />
            </Switch>
        );
    }
}

const mapStateToProps = state => ({
    loginStatus: state.loginUser.loginSuccess,
});

export default withRouter(connect(mapStateToProps, { updateLoginInfo, push })(Routes));
