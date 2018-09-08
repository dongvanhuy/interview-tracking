import { connect } from 'react-redux';
import React, { Component } from 'react';
import { push } from 'react-router-redux';
import moment from 'moment';
import { FormGroup, Grid } from 'react-bootstrap';
import { postProfileDetails, resetModalSuccess } from './ProfileDetailsAction';
import { ProfileDetailsFirstRound } from './ProfileDetailsFirstRound';
import { ProfileDetailsSecondRound } from './ProfileDetailsSecondRound';
import SuccessModal from '../common/modalSuccess/modalSuccess';


export class ProfileInfo extends Component {
    constructor(props) {
        super(props);
        this.checkValidateForm = this.checkValidateForm.bind(this);
        this.state = {
            candidate_id: '',
            candidate_fullname: '',
            position_apply: '',
            recruiter: '',
            date_meeting: '',
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
        };
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
    }
    submitForm = (e) => {
        e.preventDefault();
        this.checkValidateForm();
        const errorMessages = document.getElementsByClassName('error-message');
        if (errorMessages.length > 0) {
            errorMessages[0].focus();
        } else {
            const convertDateMeetingHours = moment(this.state.date_meeting).add(7, 'hours');
            const convertDateRoundOneHours = moment(this.state.date_round1).add(7, 'hours');
            const convertDateRoundTwoHours = moment(this.state.date_round2).add(7, 'hours');
            const stateInit = this.state;
            stateInit.date_meeting = convertDateMeetingHours;
            stateInit.date_round1 = convertDateRoundOneHours;
            stateInit.date_round2 = convertDateRoundTwoHours;
            this.props.postProfileDetails(stateInit);
        }
    }
    render() {
        return (
            <React.Fragment>
                <form className="profile-details" onSubmit={this.submitForm}>
                    <Grid>
                        <ProfileDetailsFirstRound handleChange={this.handleChange} {...this.state} />
                        <ProfileDetailsSecondRound handleChange={this.handleChange} {...this.state} />
                        <FormGroup className="profile-details__btn">
                            <button type="button" className="profile-details__cancel" onClick={() => this.props.push('/profile')}>Cancel</button>
                            <button type="submit" className="profile-details__submit">Add</button>
                        </FormGroup>
                    </Grid>
                </form>
                <SuccessModal show={this.props.show} handleClose={() => this.props.resetModalSuccess()} handleBackToList={() => this.props.push('/profile')} messages="You create candidate successfull !" />
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    profileDetails: state.profileDetails.dataProfileDetails,
    show: state.profileDetails.updateSuccess,
});
const mapDispatchToProps = {
    postProfileDetails,
    push,
    resetModalSuccess,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileInfo);
