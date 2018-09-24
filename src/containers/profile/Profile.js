import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropsTypes from 'prop-types';
import FontAwesomeIcon from 'react-fontawesome';
import classNames from 'classnames';
import { Grid, Row, Button, Col } from 'react-bootstrap';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import moment from 'moment';
import { push } from 'react-router-redux';
import uid from 'uuid';
import loading from '../../assets/images/loading.svg';
import {
    loadProfile,
    viewDetailDataId,
    deleteProfileId,
    loadProfileThisWeek,
    loadProfileThisMonth,
    loadProfileThisOther,
} from './ProfileAction';

import { getUsers } from '../profileDetails/ProfileDetailsAction';
import WarningModal from '../common/warningModal/WarningModal';
import ConfirmationModal from '../common/confirmationModal/ConfirmationModal';

export class Profile extends Component {
  static propsTypes = {
      profileToday: PropsTypes.arrayOf(PropsTypes.object),
      profilethisweek: PropsTypes.arrayOf(PropsTypes.object),
      profilethismonth: PropsTypes.arrayOf(PropsTypes.object),
      profilethisother: PropsTypes.arrayOf(PropsTypes.object),
  };

  static defaultProps = {
      profileToday: [],
      profilethisweek: [],
      profilethismonth: [],
      profilethisother: [],
  };

  constructor(props) {
      super(props);
      this.state = {
          isOpen: false,
          showConfirmation: false,
          loading: false,
      };
  }

  componentWillMount() {
      this.props.getUsers();
      this.props.loadProfile();
      this.props.loadProfileThisWeek();
      this.props.loadProfileThisMonth();
      this.props.loadProfileThisOther();
  }

  componentWillReceiveProps(nextProps) {
      if (this.props.loadDataFailed !== nextProps.loadDataFailed) {
          this.setState({
              isOpen: true,
          });
      }

      if (this.props.isDeleted !== nextProps.isDeleted) {
          window.location.reload();
      }
  }

  getFullname = (email) => {
      const { users } = this.props;
      const userFilter = users.filter(user => user.email === email);
      return userFilter.length > 0 ? userFilter[0].fullname : '';
  }

  viewDetailId = id => {
      this.props.viewDetailDataId(id);
      this.props.push({
          pathname: `/profile-info/${id}`,
          state: {
              candidateId: id,
          },
      });
  };

  deleteDetailId = id => {
      //   this.props.deleteProfileId(id);
      this.setState({
          showConfirmation: true,
          candidateId: id,
      });
      console.log('>>>>>>>>> id', id);
  }

  handleOK = () => {
      this.setState({
          showConfirmation: false,
      });
      this.props.deleteProfileId(this.state.candidateId);
      this.setState({ loading: true });
  };


  callLoading = () => (
      <div className="loading-block">
          <Table
              className="list-cadidate-table"
              xs={12}
              sm={12}
              md={12}
              lg={12}
          >
              <Thead>
                  <Tr>
                      <Th>#</Th>
                      <Th>Time</Th>
                      <Th>Candidate</Th>
                      <Th>Interviewer</Th>
                      <Th>Skill</Th>
                      <Th className="text-status">Status</Th>
                      <Th>Action</Th>
                  </Tr>
              </Thead>
          </Table>
          <div className="loading-block__spinner">
              <img src={loading} alt="loading" />
          </div>
      </div>
  );

  loadingPage = () => (
      <div className="loading-block-prof">
          <div className="loading-block-prof__spinner">
              <img src={loading} alt="loading" />
          </div>
      </div>
  );

  turnOff = () => this.setState({ isOpen: false });

  addProfileDetail = () => {
      this.props.push('/profile-info');
  };

  renderStatus = (status) => {
      const cls = classNames('label', {
          'label-success': status === 'Passed',
          'label-danger': status === 'Fail',
          'label-default': status === 'KIV',
      });
      return status ? <span className={cls}>{status}</span> : '';
  }

  renderItem = (item, index) => (
      <Tr key={uid()}>
          <Td>{index + 1}</Td>
          <Td>{moment.utc(item.start_time).format('DD-MM-YYYY HH:mm')}</Td>
          <Td>{item.candidate_fullname}</Td>
          <Td>{this.getFullname(item.interviewer_round1_01)}</Td>
          <Td>{item.position_apply}</Td>
          <Td className="text-status">{this.renderStatus(item.round1_status)}</Td>
          <Td className="text-center">
              <button
                  type="button"
                  className="btn btn-default"
                  onClick={() => this.viewDetailId(item.candidate_id)}
              >
                  <i className="fa fa-pencil" />
              </button>
              <button
                  type="button"
                  className="btn btn-default"
                  onClick={() => this.deleteDetailId(item.candidate_id)}
              >
                  <i className="fa fa-trash-o" />
              </button>
          </Td>
      </Tr>
  )

  render() {
      const {
          profileToday,
          profilethisweek,
          profilethismonth,
          profilethisother,
          isLoadingToday,
          isLoadingWeek,
          isLoadingMonth,
          isLoadingOther,
      } = this.props;
      const rowsDefault = (
          <tr key={uid()}>
              <td colSpan={7} style={{ textAlign: 'center' }}>
          Today, No Candidate.
              </td>
          </tr>
      );

      const renderTHead = (
          <Thead>
              <Tr>
                  <Th style={{ width: 50 }}>#</Th>
                  <Th className="time-td">Time</Th>
                  <Th>Candidate</Th>
                  <Th>Interviewer</Th>
                  <Th>Skill</Th>
                  <Th className="text-status status-td">Status</Th>
                  <Th className="action-td">Action</Th>
              </Tr>
          </Thead>
      );

      const rows = profileToday.map((item, index) => (
          this.renderItem(item, index)
      ));

      const rowsthisweek = profilethisweek.map((item, index) => (
          this.renderItem(item, index)
      ));

      const rowsthismonth = profilethismonth.map((item, index) => (
          this.renderItem(item, index)
      ));

      const rowsthisother = profilethisother.map((item, index) => (
          this.renderItem(item, index)
      ));

      return (
          <React.Fragment>
              {this.state.loading && this.loadingPage()}
              <section className="list-candidate-page">
                  <div className="list">
                      <Grid>
                          <Row className="show-grid">
                              <div className="list-table">
                                  <Col xs={6} sm={6} md={6} lg={6}>
                                      <h2 className="list-table__title">Today</h2>
                                  </Col>
                                  <Col xs={12} sm={12} md={12} lg={12}>
                                      {isLoadingToday ? (
                                          this.callLoading()
                                      ) : (
                                          <Table
                                              className="list-cadidate-table"
                                              xs={12}
                                              sm={12}
                                              md={12}
                                              lg={12}
                                          >
                                              {renderTHead}
                                              <Tbody>
                                                  {profileToday.length < 1 ? rowsDefault : rows}
                                              </Tbody>
                                          </Table>
                                      )}
                                  </Col>
                              </div>

                              <div className="list-table">
                                  <Col xs={12} sm={12} md={12} lg={12}>
                                      <h2 className="list-table__title">This week</h2>
                                  </Col>
                                  <Col xs={12} sm={12} md={12} lg={12}>
                                      {isLoadingWeek ? (
                                          this.callLoading()
                                      ) : (
                                          <Table
                                              className="list-cadidate-table"
                                              xs={12}
                                              sm={12}
                                              md={12}
                                              lg={12}
                                          >
                                              {renderTHead}
                                              <Tbody>
                                                  {profilethisweek.length < 1
                                                      ? rowsDefault
                                                      : rowsthisweek}
                                              </Tbody>
                                          </Table>
                                      )}
                                  </Col>
                              </div>

                              <div className="list-table">
                                  <Col xs={12} sm={12} md={12} lg={12}>
                                      <h2 className="list-table__title">This month</h2>
                                  </Col>

                                  <Col xs={12} sm={12} md={12} lg={12}>
                                      {isLoadingMonth ? (
                                          this.callLoading()
                                      ) : (
                                          <Table
                                              className="list-cadidate-table"
                                              xs={12}
                                              sm={12}
                                              md={12}
                                              lg={12}
                                          >
                                              {renderTHead}
                                              <Tbody>
                                                  {profilethismonth.length < 1
                                                      ? rowsDefault
                                                      : rowsthismonth}
                                              </Tbody>
                                          </Table>
                                      )}
                                  </Col>
                              </div>

                              <div className="list-table">
                                  <Col xs={12} sm={12} md={12} lg={12}>
                                      <h2 className="list-table__title">This other</h2>
                                  </Col>

                                  <Col xs={12} sm={12} md={12} lg={12}>
                                      {isLoadingOther ? (
                                          this.callLoading()
                                      ) : (
                                          <Table
                                              className="list-cadidate-table"
                                              xs={12}
                                              sm={12}
                                              md={12}
                                              lg={12}
                                          >
                                              {renderTHead}
                                              <Tbody>
                                                  {profilethisother.length < 1
                                                      ? rowsDefault
                                                      : rowsthisother}
                                              </Tbody>
                                          </Table>
                                      )}
                                  </Col>
                              </div>
                          </Row>
                      </Grid>
                  </div>
                  <Button
                      title="Add candidate"
                      className="add-cadidate-btn"
                      onClick={() => this.addProfileDetail()}
                  >
                      <FontAwesomeIcon name="plus" size="2x" />
                  </Button>
                  <WarningModal
                      show={this.state.isOpen}
                      handleClose={() => this.turnOff()}
                      handleOK={() => this.turnOff()}
                      paragraph="Oops. Something went wrong. Please try again or contact your administrator."
                  />
                  <ConfirmationModal
                      show={this.state.showConfirmation}
                      handleClose={() => this.setState({ showConfirmation: false })}
                      handleOK={() => this.handleOK()}
                      messages="Are you sure you want to delete profile?"
                      ps="This action can't undo. Please determine clearly before clicking OK."
                  />
              </section>
          </React.Fragment>
      );
  }
}

const mapStateToProps = state => ({
    profileToday: state.profile.dataProfile,
    profilethisweek: state.profile.dataProfileThisWeek,
    profilethismonth: state.profile.dataProfileThisMonth,
    profilethisother: state.profile.dataProfileThisOther,
    loadProfileThisOther,
    isLoadingToday: state.profile.isLoadingToday,
    isLoadingWeek: state.profile.isLoadingWeek,
    isLoadingMonth: state.profile.isLoadingMonth,
    isLoadingOther: state.profile.isLoadingOther,
    loadDataFailed: state.profile.loadDataFailed,
    isDeleted: state.profile.isDeleted,
    users: state.profileDetails.users,
});

const mapDispatchToProps = {
    loadProfile,
    loadProfileThisWeek,
    loadProfileThisMonth,
    loadProfileThisOther,
    viewDetailDataId,
    deleteProfileId,
    getUsers,
    push,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Profile);
