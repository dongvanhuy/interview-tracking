import React, { Component } from 'react';
import { Route, withRouter, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Login from '../login/Login';
import Profile from '../profile/Profile';
import ProfileInfo from '../profileDetails/ProfileInfo';
import ProfileDetails from '../profileDetails/ProfileDetails';


export class Routes extends Component {
    render() {
        console.log(this.props.loginStatus);
        let routes = (
            <Switch>
                <Route exact path="/login" component={Login} />
                <Redirect to="/login" />
            </Switch>
        );
        if (this.props.loginStatus) {
            routes = (
                <Switch>
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/profile-details" component={ProfileDetails} />
                    <Route exact path="/profile-info" component={ProfileInfo} />
                    <Redirect to="/login" />
                </Switch>
            );
        }
        return routes;
    }
}

const mapStateToProps = state => ({
    loginStatus: state.loginUser.loginSuccess,
});

export default withRouter(connect(mapStateToProps)(Routes));
