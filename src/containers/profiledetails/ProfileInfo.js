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
    getUsers,
    bookMeetingAction,
    showModalBookMeetingAction,
    hideModalBookMeetingAction,
} from './ProfileDetailsAction';
import { BookingMeetingModal } from './BookingMeetingModal';
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
    //     if (
    //         this.props.doSuccessfully !== nextProps.doSuccessfully &&
    //   nextProps.doSuccessfully
    //     ) {
    //         this.bookMeetingRoom();
    //     }
    }

  initState = {
      candidate_id: '',
      candidate_fullname: '',
      position_apply: '',
      recruiter: '',
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
          errPosition: '',
      },
  };

  handleBookMeetingRoom = (params) => {
      this.props.bookMeetingAction(params);
  };

  resetForm = () => {
      this.setState({ ...this.initState }, () => {
          this.setState({ candidate_fullname: '' });
      });
  };

  checkValidateForm = () => {
      const fullName = this.state.candidate_fullname;
      const position = this.state.position_apply;
      const interviewer1 = this.state.interviewer_round1_01;
      const interviewer2 = this.state.interviewer_round1_02;
      const { errorMessages } = this.state;

      fullName === ''
          ? (errorMessages.errFullname = 'Write in this field, pls.')
          : (errorMessages.errFullname = '');
      position === ''
          ? (errorMessages.errPosition = 'Write in this field, pls.')
          : (errorMessages.errPosition = '');
      interviewer1 === '' && interviewer2 === ''
          ? (errorMessages.errInterviewer = 'Choose an interviewer(s), pls.')
          : (errorMessages.errInterviewer = '');

      this.setState({ ...errorMessages, isChecking: true });
  };

  handleChange = e => {
      const { value, name } = e.target;
      const stateInit = this.state;
      const { isChecking } = this.state;
      stateInit[name] = value;
      if (isChecking) {
          stateInit.candidate_fullname !== ''
              ? (stateInit.errorMessages.errFullname = '')
              : (stateInit.errorMessages.errFullname = 'Write in this field, pls.');
          stateInit.position_apply !== ''
              ? (stateInit.errorMessages.errPosition = '')
              : (stateInit.errorMessages.errPosition = 'Write in this field, pls.');
          stateInit.interviewer_round1_01 !== '' ||
      stateInit.interviewer_round1_02 !== ''
              ? (stateInit.errorMessages.errInterviewer = '')
              : (stateInit.errorMessages.errInterviewer =
            'Choose an interviewer(s), pls.');
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
      errorMessages.errInterviewer === ''
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
  showModalBookMeeting = () => {
      this.props.showModalBookMeetingAction();
  }

  handleCloseBookMeeting = () => {
      this.props.hideModalBookMeetingAction();
  }

  callLoading = () => (
      <div className="loading-block-prof">
          <div className="loading-block-prof__spinner">
              <img src={loading} alt="loading" />
          </div>
      </div>
  );

  render() {
      const { users, loadingDetail, showBookMeeting } = this.props;
      const { profileId } = this.state;
      const candidateName = this.state.candidate_fullname;
      return (
          <React.Fragment>
              {(this.state.loading || loadingDetail) && this.callLoading()}
              <form className="profile-details">
                  <Grid>
                      {/* <FormGroup className="profile-details__btn profile-details__btn--top">
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
                      </FormGroup> */}
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
                          <button
                              type="button"
                              className="profile-details__submit"
                              onClick={this.showModalBookMeeting}
                          >
                            BOOK MEETING
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
              <BookingMeetingModal
                  show={showBookMeeting}
                  title="Booking Meeting"
                  handleClose={this.handleCloseBookMeeting}
                  candidateName={candidateName}
                  bookMeeting={(params) => this.handleBookMeetingRoom(params)}
              />
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
    showBookMeeting: state.profileDetails.showBookMeetingStatus,
    // dataProfilePost: state.profileDetails.dataProfilePost,
});
const mapDispatchToProps = {
    loadProfileDetails,
    createProfileDetails,
    updateProfileDetails,
    push, // ACTION GUI EPIC GUI API
    resetStateProfileDetail,
    getUsers,
    bookMeetingAction,
    showModalBookMeetingAction,
    hideModalBookMeetingAction,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProfileInfo);
