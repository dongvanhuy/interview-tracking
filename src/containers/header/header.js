/* eslint-disable no-script-url */
import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { DropdownButton, MenuItem, ButtonToolbar } from 'react-bootstrap';
import logo from '../../../src/assets/images/dxcLogo.svg';
import { authContext } from '../../adalConfig';


export class Header extends Component {
    buttonsInstance = () => {
        const Buttons = ['Hi,'];
        return <ButtonToolbar>{Buttons.map(this.renderDropdownButton)}</ButtonToolbar>;
    }

    renderDropdownButton = (title, i) => (
        <DropdownButton
            title={`${title} ${sessionStorage.getItem('givenName')} ${sessionStorage.getItem('surname')}`}
            key={i}
            id={`dropdown-basic-${i}`}
            pullRight
            className="user-name"
        >
            <MenuItem eventKey="1">Help</MenuItem>
            <MenuItem eventKey="2">Settings</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="3" onClick={() => authContext.logOut()}>Sign out</MenuItem>
        </DropdownButton>
    );

    render() {
        if (this.props.currentRoute === '/') return null; // no display in login page
        return (
            <header className="interview-header">
                <section className="container interview-header__content">
                    <a href="" className="interview-header__logo" onClick={() => this.props.push('/profile')}>
                        <img src={logo} alt="logo" />
                        <span className="interview-header__title">Interview Tracking</span>
                    </a>
                    <div className="interview-header__info">
                        {this.buttonsInstance()}
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
