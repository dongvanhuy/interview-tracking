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
import { push } from 'react-router-redux';
import PropsTypes from 'prop-types';
import { isEmpty, validateEmail } from '../../utils/Common';
import { loginCheck } from './LoginActions';

export class Login extends Component {
  static propsTypes = {
      user: PropsTypes.arrayOf(PropsTypes.object),
  };

  static defaultProps = {
      user: [],
  };

  state = {
      emailError: '',
      passwordError: '',
      email: '',
      password: '',
      success: false,
  };

  componentWillMount() {
      this.props.loginCheck();
  }

  onLogin(e) {
      e.preventDefault();
      const result = this.checkValidate();
      if (result) {
          if (
              this.state.email === 'admin@admin.com' &&
        this.state.password === 'admin'
          ) {
              this.setState({
                  success: true,
              });
          } else {
              console.log('Sai email hoac mat khau');
          }
      }
  }

  checkValidate() {
      if (!validateEmail(this.state.email)) {
          this.setState({
              emailError: 'Email invalid',
          });
          return false;
      }
      this.setState({
          emailError: '',
      });
      return true;
  }

  handleChange(e) {
      const { value, name } = e.target;
      this.setState({
          [name]: value,
      });
  }

  disableButton() {
      if (isEmpty(this.state)) {
          return true;
      } else if (isEmpty(this.state.email) || isEmpty(this.state.password)) {
          return true;
      }
      return false;
  }

  render() {
      console.log(this.state);
      if (this.state.success === true) {
          this.props.push('/profile');
      }
      const { emailError, passwordError } = this.state;
      const border = isEmpty(emailError) ? 'noBorder' : 'redBorder';
      return (
          <section className="formLogin">
              <div className="formLogin__container">
                  <div className="formLogin__outer">
                      <Form className="formLogin__form" horizontal>
                          <Col className="formLogin__logo">
                              <img
                                  src="https://2.pik.vn/20187334c225-cd80-410f-8a74-bcfb325ec38f.png"
                                  alt="Error 404"
                              />
                          </Col>
                          <span className="formLogin__title">Interview Tracking</span>
                          <FormGroup
                              controlId="formHorizontalEmail"
                              className="formLogin__allComponents"
                          >
                              <Col componentClass={ControlLabel} lg={3}>
                                  <span>Email</span>
                              </Col>
                              <Col lg={9} className="formLogin__input formLogin__email">
                                  <FormControl
                                      type="email"
                                      placeholder="Your Email"
                                      name="email"
                                      className={border}
                                      onChange={e => {
                                          this.handleChange(e);
                                      }}
                                  />
                                  <div className="formLogin__span">{emailError}</div>
                              </Col>
                          </FormGroup>

                          <FormGroup
                              controlId="formHorizontalPassword"
                              className="formLogin__allComponents"
                          >
                              <Col componentClass={ControlLabel} lg={3}>
                                  <span>Password</span>
                              </Col>
                              <Col lg={9}>
                                  <FormControl
                                      type="password"
                                      name="password"
                                      placeholder="Your Password"
                                      required
                                      className={border}
                                      onChange={e => {
                                          this.handleChange(e);
                                      }}
                                  />
                                  <div className="formLogin__span">{passwordError}</div>
                              </Col>
                          </FormGroup>

                          <FormGroup className="formLogin__demo">
                              <Row>
                                  <Col lg={12} xs={12} md={12} className="formLogin__button">
                                      <Button
                                          type="submit"
                                          disabled={this.disableButton()}
                                          onClick={e => {
                                              this.onLogin(e);
                                          }}
                                      >
                                          <span>LOG IN</span>
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
    push,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Login);
