import { connect } from 'react-redux';
import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { FormGroup, Grid } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import {
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
        this.state = this.initState;
        this.checkValidateForm = this.checkValidateForm.bind(this);
    }
    componentWillMount() {
        this.props.getUsers();
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.doSuccessfully !== nextProps.doSuccessfully) {
            this.setState({ loading: false });
            if (nextProps.doSuccessfully === true) {
                this.resetForm();
                toast('ADD SUCCESSFULLY', {
                    autoClose: 2000,
                    position: 'top-center',
                    hideProgressBar: true,
                });
            } else {
                toast('SERVER IS DIED', {
                    autoClose: 2000,
                    position: 'top-center',
                    hideProgressBar: true,
                });
            }
        }

        // save data successfull
        if (this.props.doSuccessfully !== nextProps.doSuccessfully && nextProps.doSuccessfully) {
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
      date_round1: '',
      tech_competency_round1: '',
      tech_competency_round1_cmt: '',
      cultural_fit_round1: '',
      cultural_fit_round1_cmt: '',
      ype_round1: '',
      title_round1: '',
      round1_status: '',
      cmt_result_round1: '',
      interviewer_round2: '',
      date_round2: '',
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
      },

  };

  bookMeetingRoom = () => {
      // const dataSave = this.props.dataProfilePost;
      const dataSave = this.state;
      // book meeting room
      const params = {
          Subject: `Interview for ${dataSave.candidate_fullname}`,
          Body: {
              ContentType: 'HTML',
              Content: 'The interview will be begin at this time!',
          },
          Start: {
              // DateTime: '2018-09-18T18:00:00',
              dateTime: dataSave.start_time,
              TimeZone: 'Pacific Standard Time',
          },
          End: {
              dateTime: dataSave.end_time,
              // DateTime: '2018-09-18T19:00:00',
              TimeZone: 'Pacific Standard Time',
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
  }

  resetForm = () => {
      this.setState({ ...this.initState }, () => {
          this.setState({ candidate_fullname: '' });
      });
  };

  checkValidateForm = () => {
      const fullName = this.state.candidate_fullname;
      const startTime = this.state.start_time;
      const endTime = this.state.end_time;
      const interviewer1 = this.state.interviewer_round1_01;
      const interviewer2 = this.state.interviewer_round1_02;
      const { errorMessages } = this.state;

      fullName === '' ? errorMessages.errFullname = 'Write in this field, pls.' : errorMessages.errFullname = '';
      startTime === '' ? errorMessages.errStartTimeMeeting = 'Choose a start time, pls.' : errorMessages.errStartTimeMeeting = '';
      endTime === '' ? errorMessages.errEndTimeMeeting = 'Choose a end time, pls.' : errorMessages.errEndTimeMeeting = '';
      interviewer1 === '' && interviewer2 === '' ? errorMessages.errInterviewer = 'Choose an interviewer(s), pls.' : errorMessages.errInterviewer = '';

      this.setState({ ...errorMessages, isChecking: true });
  };

  handleChange = e => {
      const { value, name } = e.target;
      const stateInit = this.state;
      const { isChecking } = this.state;
      stateInit[name] = value;
      if (isChecking) {
          stateInit.candidate_fullname !== '' ? stateInit.errorMessages.errFullname = '' : stateInit.errorMessages.errFullname = 'Write in this field, pls.';
          stateInit.start_time !== '' ? stateInit.errorMessages.errStartTimeMeeting = '' : stateInit.errorMessages.errStartTimeMeeting = 'Choose a start time, pls.';
          stateInit.end_time !== '' ? stateInit.errorMessages.errEndTimeMeeting = '' : stateInit.errorMessages.errEndTimeMeeting = 'Choose a end time, pls.';
          stateInit.interviewer_round1_01 !== '' || stateInit.interviewer_round1_02 !== '' ? stateInit.errorMessages.errInterviewer = '' : stateInit.errorMessages.errInterviewer = 'Choose an interviewer(s), pls.';
      }
      this.setState({ ...stateInit });
  };

  submitForm = e => {
      e.preventDefault();
      this.checkValidateForm();
      const { errorMessages } = this.state;

      if (errorMessages.errFullname === '' && errorMessages.errStartTimeMeeting === '' && errorMessages.errEndTimeMeeting === '' && errorMessages.errInterviewer === '') {
          this.setState({
              showConfirmation: true,
          });
      } else {
          window.scrollTo(0, 0);
      }

      //   this.onBookMeeting();
  };

  handleOK = () => {
      this.setState({
          showConfirmation: false,
      });
      this.props.createProfileDetails(this.state);
      this.setState({
          loading: true,
      });
  };

  callLoading = () => (
      <div className="loading-block-prof">
          <div className="loading-block-prof__spinner">
              <img src={loading} alt="loading" />
          </div>
      </div>
  );

  render() {
      const { users } = this.props;
      return (
          <React.Fragment>
              {this.state.loading && this.callLoading()}
              <form className="profile-details">
                  <Grid>
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
                Cancel
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
                  messages="Are you sure to do this ?"
                  ps="This action can't undo. Please determine clearly before clicking OK."
              />
              <ToastContainer />
          </React.Fragment>
      );
  }
}

const mapStateToProps = state => ({
    profileDetails: state.profileDetails.dataProfileDetails,
    doSuccessfully: state.profileDetails.doSuccessfully,
    dataProfileRes: state.profileDetails.dataProfileRes,
    users: state.profileDetails.users,
    // dataProfilePost: state.profileDetails.dataProfilePost,
});
const mapDispatchToProps = {
    createProfileDetails,
    push, // ACTION GUI EPIC GUI API
    bookMeetingRoom,
    resetStateProfileDetail,
    getUsers,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProfileInfo);
