import React, { Component } from 'react';
import {
    Grid,
    Row,
    Col,
    Form,
    FormGroup,
    FormControl,
    ControlLabel,
    Button,
} from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Row>
                        <Col lg={6}>
                            <header className="logo">
                                <img
                                    src="https://2.pik.vn/20180562316e-535a-4f51-97b8-97d2a9039c54.jpg"
                                    alt="Error 404"
                                />
                            </header>
                        </Col>
                    </Row>
                </Grid>
                <section className="formLogin">
                    <div className="formLogin__container">
                        <div className="formLogin__outer">
                            <Form className="formLogin__form" horizontal>
                                <span className="formLogin__title">Welcome</span>
                                <div className="formLogin__logo">
                                    <img
                                        src="https://2.pik.vn/20187334c225-cd80-410f-8a74-bcfb325ec38f.png"
                                        alt="Error 404"
                                    />
                                </div>
                                <FormGroup controlId="formHorizontalEmail">
                                    <Col componentClass={ControlLabel} lg={3}>
                                        Email
                                    </Col>
                                    <Col lg={9}>
                                        <FormControl type="email" placeholder="Your Email" />
                                    </Col>
                                </FormGroup>

                                <FormGroup controlId="formHorizontalPassword">
                                    <Col componentClass={ControlLabel} lg={3}>
                                        Password
                                    </Col>
                                    <Col lg={9}>
                                        <FormControl type="password" placeholder="Your Password" />
                                    </Col>
                                </FormGroup>

                                <FormGroup>
                                    <Col lgOffset={4} lg={4}>
                                        <Button bsStyle="success" type="submit">Log In</Button>
                                    </Col>
                                </FormGroup>
                            </Form>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Header;
