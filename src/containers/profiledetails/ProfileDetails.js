import { connect } from 'react-redux';
import PropsTypes from 'prop-types';
import React, { Component } from 'react';
import { push } from 'react-router-redux';
import moment from 'moment';
import { FormGroup, Grid } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import {
    loadProfileDetails,
    updateProfileDetails,
    resetStateProfileDetail,
} from './ProfileDetailsAction';
import { ProfileDetailsFirstRound } from './ProfileDetailsFirstRound';
import { ProfileDetailsSecondRound } from './ProfileDetailsSecondRound';
import LoadingInProgress from '../common/loadingPage/loadingInProgress';
import ConfirmationModal from '../common/confirmationModal/ConfirmationModal';

export class ProfileDetails extends Component {
  static propsTypes = {
      profileDetails: PropsTypes.objectOf(PropsTypes.object),
      candidateId: PropsTypes.objectOf(PropsTypes.object),
  };
  static defaultProps = {
      profileDetails: [],
      candidateId: 1000,
  };
  constructor(props) {
      super(props);
      this.checkValidateForm = this.checkValidateForm.bind(this);
      this.state = {
          candidate_id: '',
          candidate_fullname: '',
          position_apply: '',
          recruiter: '',
          eng_level: '',
          eng_level_cmt: '',
          jury_round1_01: '',
          jury_round1_02: '',
          date_round1: '',
          tech_competency_round1: '',
          tech_competency_round1_cmt: '',
          cultural_fit_round1: '',
          cultural_fit_round1_cmt: '',
          ype_round1: '',
          title_round1: '',
          round1_status: '',
          cmt_result_round1: '',
          jury_round2: '',
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
      };
  }
  componentWillMount() {
      this.props.resetStateProfileDetail();
      this.props.loadProfileDetails(this.props.candidateId);
  }
  componentWillReceiveProps(nextProps) {
      if (!this.props.profileDetails[0] && nextProps.profileDetails[0]) {
          const dateRoundOne = moment(nextProps.profileDetails[0].date_round1).format('DD-MM-YYYY HH:mm');
          const dateRoundTwo = moment(nextProps.profileDetails[0].date_round2).format('DD-MM-YYYY HH:mm');
          this.setState({
              ...nextProps.profileDetails[0],
              date_round1: dateRoundOne,
              date_round2: dateRoundTwo,
          });
      }
      //       if (
      //           this.props.dataProfileRes !== nextProps.dataProfileRes &&
      //   nextProps.dataProfileRes &&
      //   nextProps.dataProfileRes.status === 200
      //       ) {
      //           this.setState({ loading: false });
      //           toast.success('ADD SUCCESSFULLY', {
      //               autoClose: 2000,
      //               position: 'top-center',
      //               hideProgressBar: true,
      //           });
      //       } else {
      //           this.setState({ loading: true });
      //       }
  }
  checkValidateForm(name, value) {
      const candidateName = document.getElementsByName('candidate_fullname');
      if (value === '' && name === 'candidate_fullname') {
          candidateName[0].classList.add('error-message');
      } else if (this.state.candidate_fullname === '' && name === undefined) {
          candidateName[0].classList.add('error-message');
      }
      if (this.state.candidate_fullname !== '') {
          candidateName[0].classList.remove('error-message');
      }
  }
  handleChange = (e, childAttr) => {
      const { value, name } = e.target;
      const stateInit = this.state;
      if (childAttr === undefined) {
          stateInit[name] = value;
          this.setState({ ...stateInit });
      } else {
          stateInit[name] = childAttr;
          this.setState({ ...stateInit });
      }
      this.checkValidateForm(name, value);
  };
  submitForm = e => {
      e.preventDefault();
      this.checkValidateForm();
      const errorMessages = document.getElementsByClassName('error-message');
      if (errorMessages.length > 0) {
          errorMessages[0].focus();
      } else if (this.props.candidateId !== null) {
          const stateInit = this.state;
          if (this.state.date_meeting) {
              stateInit.date_meeting = moment(this.state.date_meeting).format('DD-MM-YYYY HH:mm');
          }
          this.setState({ ...stateInit }, () => {
              this.props.updateProfileDetails(this.state);
          });
      }
  };
  render() {
      return (
          <React.Fragment>
              <LoadingInProgress show={!this.props.profileDetails[0]} />
              <form className="profile-details">
                  <Grid>
                      <ProfileDetailsFirstRound
                          handleChange={this.handleChange}
                          {...this.state}
                      />
                      <ProfileDetailsSecondRound
                          handleChange={this.handleChange}
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
                  handleBackToList={() => this.props.push('/profile')}
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
    show: state.profileDetails.updateSuccess,
    candidateId: state.router.location.state
        ? state.router.location.state.candidateId
        : state.profile.profileSelectedId,
    dataProfileRes: state.profileDetails.dataProfileRes,
    status: state.profileDetails.statusCode.status,
});

const mapDispatchToProps = {
    loadProfileDetails,
    updateProfileDetails,
    push,
    resetStateProfileDetail,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProfileDetails);
