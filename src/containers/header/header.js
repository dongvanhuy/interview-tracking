/* eslint-disable no-script-url */
import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { DropdownButton, MenuItem, ButtonToolbar, ListGroup, ListGroupItem } from 'react-bootstrap';
import FontAwesomeIcon from 'react-fontawesome';
import logo from '../../../src/assets/images/dxcLogo.svg';
import { authContext } from '../../adalConfig';

export class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
        };
    }
    addActiveClass = () => {
        const active = this.state.showMenu;
        this.setState({ showMenu: !active });
    };

    buttonsInstance = () => {
        const Buttons = ['Welcome,'];
        return (
            <ButtonToolbar>{Buttons.map(this.renderDropdownButton)}</ButtonToolbar>
        );
    };

    renderDropdownButton = (title, i) => (
        <DropdownButton
            title={`${title} ${sessionStorage.getItem('givenName')} ${sessionStorage.getItem('surname')}`}
            key={i}
            id={`dropdown-basic-${i}`}
            pullRight
            className="user-name"
        >
            <MenuItem eventKey="1" onClick={() => authContext.logOut()}>
            Sign out
            </MenuItem>
        </DropdownButton>
    );

    render() {
        return (
            <header className="interview-header">
                <section className="container interview-header__content">
                    <Link
                        to=""
                        className="interview-header__logo"
                        onClick={() => this.props.push('/profile')}
                    >
                        <img src={logo} alt="logo" />
                        <h1 className="interview-header__title">Interview Tracking</h1>
                    </Link>
                    <div className="interview-header__info hidden-xs">
                        {this.buttonsInstance()}
                    </div>
                    <div className="interview-header__mobile hidden-sm hidden-md hidden-lg">
                        <FontAwesomeIcon name="bars" size="2x" onClick={() => this.addActiveClass()} />
                        <ListGroup className={!this.state.showMenu && 'invisible'}>
                            <ListGroupItem>Welcome, {`${sessionStorage.getItem('givenName')} ${sessionStorage.getItem('surname')}`}</ListGroupItem>
                            <ListGroupItem onClick={() => authContext.logOut()}>Logout</ListGroupItem>
                        </ListGroup>
                    </div>
                </section>
            </header>
        );
    }
}

export default connect(
    null,
    { push },
)(Header);
