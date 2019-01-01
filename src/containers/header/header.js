/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-script-url */
import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { UserAgentApplication } from 'msal';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import config from '../../appConfig';
import logo from '../../../src/assets/images/dxcLogo.svg';
import iconUser from '../../../src/assets/images/human.png';
import burgerIcon from '../../../src/assets/images/burgerIcon.png';

export class Header extends Component {
    constructor(props) {
        super(props);
        this.userAgentApplication = new UserAgentApplication(config.appId, null, null);
        this.state = {
            showMenu: false,
        };
    }
    addActiveClass = () => {
        const active = this.state.showMenu;
        this.setState({ showMenu: !active });
    };

    logout() {
        this.userAgentApplication.logout();
        sessionStorage.clear();
    }

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
                            <Link className="interview-header__logout" to="" onClick={() => this.logout()}>Logout</Link>
                        </div>
                        <img className="icon-user" src={iconUser} alt="icon user" width="38" />
                        {/* <FontAwesomeIcon className="icon-user" name="user-circle" size="2x" /> */}
                    </div>
                    <div className="interview-header__mobile hidden-sm hidden-md hidden-lg">
                        <div onClick={() => this.addActiveClass()}>
                            <img className="icon-user" src={burgerIcon} alt="icon user" width="38" />
                        </div>
                        {/* <FontAwesomeIcon name="bars" size="2x" onClick={() => this.addActiveClass()} /> */}
                        <ListGroup className={!this.state.showMenu && 'invisible'}>
                            <ListGroupItem>{`${sessionStorage.getItem('userEmail')}`}</ListGroupItem>
                            <ListGroupItem onClick={() => this.logout()}>Logout</ListGroupItem>
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
