/* eslint-disable no-script-url */
import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import logo from '../../../src/assets/images/dxcLogo.svg';


export class Header extends Component {
    render() {
        if (this.props.currentRoute === '/') return null; // no display in login page
        return (
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
        );
    }
}

const mapStateToProps = (state) => ({
    currentRoute: state.router.location.pathname,
});

export default connect(
    mapStateToProps,
    { push },
)(Header);
