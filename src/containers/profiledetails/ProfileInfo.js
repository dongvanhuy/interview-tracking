/* eslint-disable no-shadow */
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { FormGroup, Grid } from 'react-bootstrap';
import { ToastContainer, toast, Slide } from 'react-toastify';
import moment from 'moment';
import 'react-toastify/dist/ReactToastify.min.css';
import { isEmpty } from '../../utils/Common';
import {
    loadProfileDetails,
    updateProfileDetails,
    createProfileDetails,
    resetStateProfileDetail,
    bookMeetingRoom,
    getUsers,
} from './ProfileDetailsAction';
import { ProfileDetailsFirstRound } from './ProfileDetailsFirstRound';
import { ProfileDetailsSecondRound } from './ProfileDetailsSecondRound';
import ConfirmationModal from '../common/confirmationModal/ConfirmationModal';
import loading from '../../assets/images/loading.svg';

export class ProfileInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...this.initState,
            profileId: this.props.match.params.profileId,
        };
        this.checkValidateForm = this.checkValidateForm.bind(this);
    }
    componentWillMount() {
        const { profileId } = this.state;
        this.props.getUsers();
        if (!isEmpty(profileId)) {
            this.props.loadProfileDetails(profileId);
        }
    }

    componentWillReceiveProps(nextProps) {
        const { profileId } = this.state;
        if (!this.props.profileDetails[0] && nextProps.profileDetails[0]) {
            const dateRoundOne = moment(nextProps.profileDetails[0].date_round1).toISOString();
            const dateRoundTwo = moment(nextProps.profileDetails[0].date_round2).toISOString();
            this.setState({
                ...nextProps.profileDetails[0],
                date_round1: dateRoundOne,
                date_round2: dateRoundTwo,
            });
        }
        if (this.props.doSuccessfully !== nextProps.doSuccessfully) {
            this.setState({ loading: false });
            // const demoCSS = cssTransition({
            //     enter: 'demo',
            //     exit: 'demo',
            //     // default to 750ms, can be omitted
            // });
            if (nextProps.doSuccessfully === true) {
                if (!isEmpty(profileId)) {
                    // update
                    toast('You have successfully update profile', {
                        autoClose: 5000,
                        position: 'top-center',
                        // transition: demoCSS,
                        hideProgressBar: true,
                        // className: 'customToaster',
                    });
                } else {
                    this.resetForm();
                    toast('You have successfully add new profile', {
                        autoClose: 5000,
                        position: 'top-center',
                        // transition: demoCSS,
                        hideProgressBar: true,
                        // className: 'customToaster',
                    });
                }
            } else if (nextProps.doSuccessfully === false) {
                toast(
                    'Oops. Something went wrong. Please try again or contact your administrator.',
                    {
                        autoClose: 2000,
                        position: 'top-center',
                        hideProgressBar: true,
                        className: 'customToaster',
                    },
                );
            }
        }

        // save data successfull
        if (
            this.props.doSuccessfully !== nextProps.doSuccessfully &&
      nextProps.doSuccessfully
        ) {
            this.bookMeetingRoom();
        }
    }

  initState = {
      candidate_id: '',
      candidate_fullname: '',
      position_apply: '',
      recruiter: '',
      start_time: '',
      end_time: '',
      eng_level: '',
      eng_level_cmt: '',
      interviewer_round1_01: '',
      interviewer_round1_02: '',
      date_round1: null,
      tech_competency_round1: '',
      tech_competency_round1_cmt: '',
      cultural_fit_round1: '',
      cultural_fit_round1_cmt: '',
      ype_round1: '',
      title_round1: '',
      round1_status: '',
      cmt_result_round1: '',
      interviewer_round2: '',
      date_round2: null,
      tech_competency_round2: '',
      tech_competency_round2_cmt: '',
      cultural_fit_round2: '',
      cultural_fit_round2_cmt: '',
      business_acument: '',
      business_acument_cmt: '',
      soft_skill: '',
      soft_skill_cmt: '',
      people_management: '',
      people_management_cmt: '',
      ype_round2: '',
      title_round2: '',
      round2_status: '',
      cmt_result_round2: '',
      showConfirmation: false,
      loading: false,
      isChecking: false,
      errorMessages: {
          errFullname: '',
          errStartTimeMeeting: '',
          errEndTimeMeeting: '',
          errInterviewer: '',
          errTime: '',
          errPosition: '',
      },
  };

  bookMeetingRoom = () => {
      const dataSave = this.state;
      // book meeting room
      const params = {
          Subject: `Interview for ${dataSave.candidate_fullname}`,
          Body: {
              ContentType: 'HTML',
              Content: 'The interview will be begin at this time!',
          },
          Start: {
              DateTime: moment.utc(dataSave.start_time).format('YYYY-MM-DDTHH:mm:ss'),
              TimeZone: 'SE Asia Standard Time',
          },
          End: {
              DateTime: moment.utc(dataSave.end_time).format('YYYY-MM-DDTHH:mm:ss'),
              TimeZone: 'SE Asia Standard Time',
          },
          Attendees: [
              {
                  EmailAddress: {
                      Address: dataSave.interviewer_round1_01,
                      Name: '',
                  },
                  Type: 'Required',
              },
              {
                  EmailAddress: {
                      Address: dataSave.interviewer_round1_02,
                      Name: '',
                  },
                  Type: 'Required',
              },
          ],
      };

      this.props.bookMeetingRoom(params);
  };

  resetForm = () => {
      this.setState({ ...this.initState }, () => {
          this.setState({ candidate_fullname: '' });
      });
  };

  checkValidateForm = () => {
      const fullName = this.state.candidate_fullname;
      const position = this.state.position_apply;
      const startTime = this.state.start_time;
      const endTime = this.state.end_time;
      const interviewer1 = this.state.interviewer_round1_01;
      const interviewer2 = this.state.interviewer_round1_02;
      const { errorMessages } = this.state;
      const result = moment(this.state.start_time).isBefore(
          this.state.end_time,
          'minute',
      );

      fullName === ''
          ? (errorMessages.errFullname = 'Write in this field, pls.')
          : (errorMessages.errFullname = '');
      position === ''
          ? (errorMessages.errPosition = 'Write in this field, pls.')
          : (errorMessages.errPosition = '');
      startTime === ''
          ? (errorMessages.errStartTimeMeeting = 'Choose a start time, pls.')
          : (errorMessages.errStartTimeMeeting = '');
      endTime === ''
          ? (errorMessages.errEndTimeMeeting = 'Choose a end time, pls.')
          : (errorMessages.errEndTimeMeeting = '');
      interviewer1 === '' && interviewer2 === ''
          ? (errorMessages.errInterviewer = 'Choose an interviewer(s), pls.')
          : (errorMessages.errInterviewer = '');
      !result
          ? (errorMessages.errTime = ' Please choose reasonable datetime.')
          : (errorMessages.errTime = '');

      this.setState({ ...errorMessages, isChecking: true });
  };

  handleChange = e => {
      const { value, name } = e.target;
      const stateInit = this.state;
      const { isChecking } = this.state;
      stateInit[name] = value;
      const result = moment(this.state.start_time).isBefore(
          this.state.end_time,
          'minute',
      );
      if (isChecking) {
          stateInit.candidate_fullname !== ''
              ? (stateInit.errorMessages.errFullname = '')
              : (stateInit.errorMessages.errFullname = 'Write in this field, pls.');
          stateInit.position_apply !== ''
              ? (stateInit.errorMessages.errPosition = '')
              : (stateInit.errorMessages.errPosition = 'Write in this field, pls.');
          stateInit.start_time !== ''
              ? (stateInit.errorMessages.errStartTimeMeeting = '')
              : (stateInit.errorMessages.errStartTimeMeeting =
            'Choose a start time, pls.');
          stateInit.end_time !== ''
              ? (stateInit.errorMessages.errEndTimeMeeting = '')
              : (stateInit.errorMessages.errEndTimeMeeting =
            'Choose a end time, pls.');
          stateInit.interviewer_round1_01 !== '' ||
      stateInit.interviewer_round1_02 !== ''
              ? (stateInit.errorMessages.errInterviewer = '')
              : (stateInit.errorMessages.errInterviewer =
            'Choose an interviewer(s), pls.');
          !result
              ? (stateInit.errorMessages.errTime =
            'Please choose reasonable datetime.')
              : (stateInit.errorMessages.errTime = '');
      }
      this.setState({ ...stateInit });
  };

  submitForm = e => {
      e.preventDefault();
      this.checkValidateForm();
      const { errorMessages } = this.state;

      if (
          errorMessages.errFullname === '' &&
      errorMessages.errPosition === '' &&
      errorMessages.errStartTimeMeeting === '' &&
      errorMessages.errEndTimeMeeting === '' &&
      errorMessages.errInterviewer === '' &&
      errorMessages.errTime === ''
      ) {
          this.setState({
              showConfirmation: true,
          });
      } else {
          window.scrollTo(0, 0);
      }
  };

  handleOK = () => {
      const { profileId } = this.state;
      this.setState({
          showConfirmation: false,
          loading: true,
      });
      if (!isEmpty(profileId)) {
      //   this.state.profileId = profileId;
          this.setState({ profileId });
          this.props.updateProfileDetails(this.state);
      } else {
          this.props.createProfileDetails(this.state);
      }
  };

  callLoading = () => (
      <div className="loading-block-prof">
          <div className="loading-block-prof__spinner">
              <img src={loading} alt="loading" />
          </div>
      </div>
  );

  render() {
      const { users, loadingDetail } = this.props;
      const { profileId } = this.state;
      return (
          <React.Fragment>
              {(this.state.loading || loadingDetail) && this.callLoading()}
              <form className="profile-details">
                  <Grid>
                      <FormGroup className="profile-details__btn profile-details__btn--top">
                          <button
                              type="button"
                              className="profile-details__cancel"
                              onClick={() => this.props.push('/profile')}
                          >
                            CANCEL
                          </button>
                          <button
                              type="button"
                              className="profile-details__submit"
                              onClick={e => this.submitForm(e)}
                          >
                            SAVE
                          </button>
                      </FormGroup>
                      <ProfileDetailsFirstRound
                          handleChange={this.handleChange}
                          users={users}
                          {...this.state}
                      />
                      <ProfileDetailsSecondRound
                          handleChange={this.handleChange}
                          users={users}
                          {...this.state}
                      />
                      <FormGroup className="profile-details__btn">
                          <button
                              type="button"
                              className="profile-details__cancel"
                              onClick={() => this.props.push('/profile')}
                          >
                            CANCEL
                          </button>
                          <button
                              type="button"
                              className="profile-details__submit"
                              onClick={e => this.submitForm(e)}
                          >
                            SAVE
                          </button>
                      </FormGroup>
                  </Grid>
              </form>
              <ConfirmationModal
                  show={this.state.showConfirmation}
                  handleClose={() => this.setState({ showConfirmation: false })}
                  handleOK={() => this.handleOK()}
                  title={!isEmpty(profileId) ? 'Update' : 'Save'}
                  messages={
                      !isEmpty(profileId)
                          ? 'Are you sure you want to update new profile?'
                          : 'Are you sure you want to save new profile?'
                  }
                  ps="This action can't undo. Please determine clearly before clicking OK."
              />
              <ToastContainer transition={Slide} />
          </React.Fragment>
      );
  }
}

const mapStateToProps = state => ({
    profileDetails: state.profileDetails.dataProfileDetails,
    doSuccessfully: state.profileDetails.doSuccessfully,
    dataProfileRes: state.profileDetails.dataProfileRes,
    users: state.profileDetails.users,
    loadingDetail: state.profileDetails.loadingDetail,
    // dataProfilePost: state.profileDetails.dataProfilePost,
});
const mapDispatchToProps = {
    loadProfileDetails,
    createProfileDetails,
    updateProfileDetails,
    push, // ACTION GUI EPIC GUI API
    bookMeetingRoom,
    resetStateProfileDetail,
    getUsers,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProfileInfo);
