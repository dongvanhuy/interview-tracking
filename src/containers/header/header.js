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
                        <div className="interview-header__user">
                            <p className="interview-header__email">{sessionStorage.getItem('userEmail')}</p>
                            <Link className="interview-header__logout" to="" onClick={() => authContext.logOut()}>Logout</Link>
                        </div>
                        <FontAwesomeIcon className="icon-user" name="user-circle" size="2x" />
                    </div>
                    <div className="interview-header__mobile hidden-sm hidden-md hidden-lg">
                        <FontAwesomeIcon name="bars" size="2x" onClick={() => this.addActiveClass()} />
                        <ListGroup className={!this.state.showMenu && 'invisible'}>
                            <ListGroupItem>{`${sessionStorage.getItem('userEmail')}`}</ListGroupItem>
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
