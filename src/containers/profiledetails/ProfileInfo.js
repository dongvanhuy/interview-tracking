import { connect } from 'react-redux';
import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { FormGroup, Grid } from 'react-bootstrap';
import moment from 'moment';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { postProfileDetails } from './ProfileDetailsAction';
import { ProfileDetailsFirstRound } from './ProfileDetailsFirstRound';
import { ProfileDetailsSecondRound } from './ProfileDetailsSecondRound';
import ConfirmationModal from '../common/confirmationModal/ConfirmationModal';
import loading from '../../assets/images/loading.svg';

export class ProfileInfo extends Component {
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
            loading: false,
        };
    }

    componentWillReceiveProps(nextProps) {
        if (
            this.props.dataProfileRes !== nextProps.dataProfileRes &&
      nextProps.dataProfileRes &&
      nextProps.dataProfileRes.status === 200
        ) {
            this.setState({ loading: false });
            toast.success('ADD SUCCESSFULLY', {
                autoClose: 2000,
                hideProgressBar: true,
            });
        } else {
            this.setState({ loading: true });
        }
    }

  checkValidateForm = (name, value) => {
      const candidateName = document.getElementsByName('candidate_fullname');
      if (value === '' && name === 'candidate_fullname') {
          candidateName[0].classList.add('error-message');
      } else if (this.state.candidate_fullname === '' && name === undefined) {
          candidateName[0].classList.add('error-message');
      }
      if (this.state.candidate_fullname !== '') {
          candidateName[0].classList.remove('error-message');
      }
  };

  handleChange = (e, childAttr) => {
      const { value, name } = e.target;
      const stateInit = this.state;
      if (childAttr === undefined) {
          stateInit[name] = value;
          if (name === 'date_round1') {
              stateInit.date_round1 = moment(value).format('DD-MM-YYYY hh:mm');
          }
          if (name === 'date_round2') {
              stateInit.date_round2 = moment(value).format('DD-MM-YYYY hh:mm');
          }
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
      } else {
      //   this.props.postProfileDetails(this.state);
          this.setState({
              showConfirmation: true,
          });
      }
  };

  handleOK = () => {
      this.setState({
          showConfirmation: false,
      });
      this.props.postProfileDetails(this.state);
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
  )

  render() {
      return (
          <React.Fragment>
              { this.state.loading && this.callLoading() }
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
    show: state.profileDetails.updateSuccess,
    dataProfileRes: state.profileDetails.dataProfileRes,
});
const mapDispatchToProps = {
    postProfileDetails,
    push, // ACTION GUI EPIC GUI API
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProfileInfo);
