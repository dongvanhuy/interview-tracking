import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropsTypes from 'prop-types';
import classNames from 'classnames';
import { Grid, Row, Button, Col } from 'react-bootstrap';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import moment from 'moment';
import { push } from 'react-router-redux';
import uid from 'uuid';
import loading from '../../assets/images/loading.svg';
import plus from '../../assets/images/plus.png';
import deleteIcon from '../../assets/images/delete.svg';
import editIcon from '../../assets/images/edit.png';
import {
    loadProfile,
    viewDetailDataId,
    deleteProfileId,
    loadProfileThisWeek,
    loadProfileThisMonth,
    loadProfileThisOther,
} from './ProfileAction';

import { getUsers, getUsersFailed } from '../profileDetails/ProfileDetailsAction';
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
          //   loading: false,
      };
  }

  componentWillMount() {
      this.props.getUsers();
      this.props.loadProfile();
      this.props.loadProfileThisWeek();
      this.props.loadProfileThisMonth();
      this.props.loadProfileThisOther();
      if (!window.navigator.onLine) {
          this.props.getUsersFailed();
      }
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

    //   getFullname = (email) => {
    //       const { users } = this.props;
    //       const userFilter = users.filter(user => user.email === email);
    //       return userFilter.length > 0 ? userFilter[0].fullname : '';
    //   }

  getFullname = (email) => email;

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
      // this.props.deleteProfileId(id);
      this.setState({
          showConfirmation: true,
          candidateId: id,
      });
  }

  handleOK = () => {
      this.setState({
          showConfirmation: false,
      });
      this.props.deleteProfileId(this.state.candidateId);
      //   this.setState({ loading: true });
  };


  callLoading = () => (
      <div className="loading-block">
          {/* <Table
              className="list-cadidate-table"
              xs={12}
              sm={12}
              md={12}
              lg={12}
          >
              <Thead>
                  <Tr className="row">
                      <Th>#</Th>
                      <Th>Time</Th>
                      <Th>Candidate</Th>
                      <Th>Interviewer</Th>
                      <Th>Skill</Th>
                      <Th className="text-status">Status</Th>
                      <Th>Action</Th>
                  </Tr>
              </Thead>
          </Table> */}
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

  rowsDefault = (param) => (
      <div className="profile-no-data">
          <p colSpan={8} className="text-center profile-no-data__txt">
              {param}
          </p>
      </div>
  );

  renderStatus = (status) => {
      const cls = classNames('label', {
          'label-success': status === 'Passed',
          'label-danger': status === 'Fail',
          'label-default': status === 'KIV',
      });
      return status ? <span className={cls}>{status}</span> : '';
  }

  renderItem = (item) => (
      <Tr key={uid()} className="tableComponent">
          {/* <Td>{index + 1}</Td> */}
          <Td>{moment.utc(item.start_time).format('DD-MM-YYYY HH:mm')}</Td>
          <Td>{item.candidate_fullname}</Td>
          <Td>{this.getFullname(item.interviewer_round1_01 || item.interviewer_round1_02)}</Td>
          <Td>{item.position_apply}</Td>
          <Td className="text-status">{item.round1_status}</Td>
          <Td className="text-status">{item.round2_status}</Td>
          <Td className="text-center">
              <button
                  type="button"
                  className="btn button-common button-common__left"
                  onClick={() => this.viewDetailId(item.candidate_id)}
              >
                  <img src={editIcon} alt="edit" width="25" />
                  {/* <i className="fa fa-pencil" /> */}
              </button>
              <button
                  type="button"
                  className="btn button-common button-common__right"
                  onClick={() => this.deleteDetailId(item.candidate_id)}
              >
                  <img src={deleteIcon} alt="delete" width="25" />
                  {/* <i className="fa fa-trash-o" /> */}
              </button>
          </Td>
      </Tr>
  )

  renderItemTable = (item) => (
      <div key={uid()} className="candidate-table__body--item">
          {/* <div className="number candidate-table__body--col">{index + 1}</div> */}
          <div className="time candidate-table__body--col">{moment.utc(item.start_time).format('DD-MM-YYYY HH:mm')}</div>
          <div className="candidate candidate-table__body--col">{item.candidate_fullname}</div>
          <div className="interviewer candidate-table__body--col">{this.getFullname(item.interviewer_round1_01 || item.interviewer_round1_02)}</div>
          <div className="position candidate-table__body--col">{item.position_apply}</div>
          <div className="status candidate-table__body--col">{item.round1_status}</div>
          <div className="status candidate-table__body--col">{item.round2_status}</div>
          <div className="action candidate-table__body--col">
              <button
                  type="button"
                  className="btn button-common button-common__left"
                  onClick={() => this.viewDetailId(item.candidate_id)}
              >
                  <img src={editIcon} alt="edit" width="25" />
                  {/* <i className="fa fa-pencil" /> */}
              </button>
              <button
                  type="button"
                  className="btn button-common button-common__right"
                  onClick={() => this.deleteDetailId(item.candidate_id)}
              >
                  <img src={deleteIcon} alt="delete" width="25" />
                  {/* <i className="fa fa-trash-o" /> */}
              </button>
          </div>
      </div>
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

      const renderTHead = (
          <Thead>
              <Tr>
                  {/* <Th>#</Th> */}
                  <Th>Time</Th>
                  <Th>Candidate</Th>
                  <Th>Interviewer</Th>
                  <Th>Position</Th>
                  <Th className="text-status">Status R1</Th>
                  <Th className="text-status">Status R2</Th>
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

      const isLoading = isLoadingToday || isLoadingMonth || isLoadingWeek || isLoadingOther;
      const isNoData = !isLoading && (profileToday.length === 0 && profilethisweek.length === 0 && profilethismonth.length === 0 && profilethisother.length === 0);

      return (
          <React.Fragment>
              {isLoading && this.loadingPage()}
              <section className="list-candidate-page">
                  <div className="list">
                      <Grid>
                          <Row className="show-grid hidden-not-xs">
                              {/* {isLoading && this.callLoading()} */}
                              {isNoData && this.rowsDefault('No Candidate.')}
                              {profileToday.length > 0 &&
                              <div className="list-table">
                                  <Col xs={6} sm={6} md={6} lg={6}>
                                      <h2 className="list-table__title">Today</h2>
                                  </Col>
                                  <Col xs={12} sm={12} md={12} lg={12}>
                                      <Table
                                          className="list-cadidate-table"
                                          xs={12}
                                          sm={12}
                                          md={12}
                                          lg={12}
                                      >
                                          {renderTHead}
                                          <Tbody>
                                              {profileToday.length < 1 ? this.rowsDefault('Today, No Candidate.') : rows}
                                          </Tbody>
                                      </Table>
                                  </Col>
                              </div>
                              }
                              {profilethisweek.length > 0 &&
                              <div className="list-table">
                                  <Col xs={12} sm={12} md={12} lg={12}>
                                      <h2 className="list-table__title">This week</h2>
                                  </Col>
                                  <Col xs={12} sm={12} md={12} lg={12}>
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
                                                  ? this.rowsDefault('This week, No Candidate.')
                                                  : rowsthisweek}
                                          </Tbody>
                                      </Table>
                                  </Col>
                              </div>
                              }
                              {profilethismonth.length > 0 &&
                              <div className="list-table">
                                  <Col xs={12} sm={12} md={12} lg={12}>
                                      <h2 className="list-table__title">This month</h2>
                                  </Col>

                                  <Col xs={12} sm={12} md={12} lg={12}>
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
                                                  ? this.rowsDefault('This month, No Candidate.')
                                                  : rowsthismonth}
                                          </Tbody>
                                      </Table>
                                  </Col>
                              </div>
                              }
                              { profilethisother.length > 0 &&
                              <div className="list-table">
                                  <Col xs={12} sm={12} md={12} lg={12}>
                                      <h2 className="list-table__title">This other</h2>
                                  </Col>

                                  <Col xs={12} sm={12} md={12} lg={12}>
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
                                                  ? this.rowsDefault('This other, No Candidate.')
                                                  : rowsthisother}
                                          </Tbody>
                                      </Table>
                                  </Col>
                              </div>
                              }
                          </Row>
                          {/* list profiles on laptop */}
                          <div className="list-candidate-page row hidden-xs">
                              <div className="candidate-table container">
                                  <div className="candidate-table__header">
                                      {/* <div className="number candidate-table__header-th">#</div> */}
                                      <div className="time candidate-table__header-th">Time</div>
                                      <div className="candidate candidate-table__header-th">Candidate</div>
                                      <div className="interviewer candidate-table__header-th">Interviewer</div>
                                      <div className="position candidate-table__header-th">Position</div>
                                      <div className="status candidate-table__header-th">Status R1</div>
                                      <div className="status candidate-table__header-th">Status R2</div>
                                      <div className="action text-center candidate-table__header-th">Action</div>
                                  </div>
                                  <div className="candidate-table__body">
                                      {/* {isLoading && this.callLoading()} */}
                                      {isNoData && this.rowsDefault('No Candidate.')}
                                      {profileToday.length > 0 &&
                                      <div className="candidate-table__body--items">
                                          <div className="candidate-table__body--title">Today</div>
                                          <div>
                                              {profileToday.map((item, index) => (
                                                  this.renderItemTable(item, index)
                                              ))}
                                          </div>
                                      </div>
                                      }
                                      {profilethisweek.length > 0 &&
                                      <div className="candidate-table__body--items">
                                          <div className="candidate-table__body--title">This week</div>
                                          <div>
                                              {profilethisweek.map((item, index) => (
                                                  this.renderItemTable(item, index)
                                              ))}
                                          </div>
                                      </div>
                                      }
                                      {profilethismonth.length > 0 &&
                                      <div className="candidate-table__body--items">
                                          <div className="candidate-table__body--title">This month</div>
                                          <div>
                                              {profilethismonth.map((item, index) => (
                                                  this.renderItemTable(item, index)
                                              ))}
                                          </div>
                                      </div>
                                      }
                                      {profilethisother.length > 0 &&
                                      <div className="candidate-table__body--items">
                                          <div className="candidate-table__body--title">This other</div>
                                          <div>
                                              {profilethisother.map((item, index) => (
                                                  this.renderItemTable(item, index)
                                              ))}
                                          </div>
                                      </div>
                                      }
                                  </div>

                              </div>
                          </div>
                      </Grid>
                  </div>
                  <Button
                      title="Add candidate"
                      className="add-cadidate-btn"
                      onClick={() => this.addProfileDetail()}
                  >
                      <img src={plus} className="plus-icon" alt="plus" width="30" />
                      {/* <FontAwesomeIcon name="plus" size="2x" /> */}
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
                      title="Delete"
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
    getUsersFailed,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Profile);
