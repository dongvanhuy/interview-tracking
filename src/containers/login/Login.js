import React, { Component } from 'react';
import {
    Row,
    Col,
    Form,
    FormGroup,
    FormControl,
    ControlLabel,
    Button,
} from 'react-bootstrap';
import { connect } from 'react-redux';
import PropsTypes from 'prop-types';
import { preventSubmit, validateForm } from '../../utils/Common';
import { loginCheck } from './LoginActions';

class Login extends Component {
  static propsTypes = {
      user: PropsTypes.arrayOf(PropsTypes.object),
  };

  static defaultProps = {
      user: [],
  };

  componentWillMount() {
      this.props.loginCheck();
  }

  render() {
      return (
          <section className="formLogin">
              <div className="formLogin__container">
                  <div className="formLogin__outer">
                      <Form className="formLogin__form" horizontal>
                          <div className="formLogin__logo">
                              <img
                                  src="https://2.pik.vn/20187334c225-cd80-410f-8a74-bcfb325ec38f.png"
                                  alt="Error 404"
                              />
                          </div>
                          <span className="formLogin__title">Interview Tracking</span>

                          <FormGroup controlId="formHorizontalEmail">
                              <Col componentClass={ControlLabel} lg={3}>
                  Email
                              </Col>
                              <Col lg={9}>
                                  <FormControl
                                      type="email"
                                      placeholder="Your Email"
                                      name="email"
                                  />
                              </Col>
                          </FormGroup>

                          <FormGroup controlId="formHorizontalPassword">
                              <Col componentClass={ControlLabel} lg={3}>
                  Password
                              </Col>
                              <Col lg={9}>
                                  <FormControl
                                      type="password"
                                      placeholder="Your Password"
                                      required
                                  />
                              </Col>
                          </FormGroup>

                          <FormGroup>
                              <Row>
                                  <Col
                                      lgOffset={1}
                                      lg={3}
                                      xsOffset={1}
                                      xs={3}
                                      md={3}
                                      className="formLogin__button"
                                  >
                                      <Button
                                          bsStyle="success"
                                          type="submit"
                                          onClick={e => {
                                              preventSubmit(e);
                                              validateForm();
                                          }}
                                      >
                      Log In
                                      </Button>
                                  </Col>
                                  <Col>
                                      <Button bsStyle="success" type="submit">
                      Login using Global Pass
                                      </Button>
                                  </Col>
                              </Row>
                          </FormGroup>
                      </Form>
                  </div>
              </div>
          </section>
      );
  }
}

const mapStateToProps = state => ({
    user: state.loginUser.dataLogin,
});

const mapDispatchToProps = {
    loginCheck,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Login);
