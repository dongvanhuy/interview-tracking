import { connect } from 'react-redux';
import PropsTypes from 'prop-types';
import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { FormGroup, Grid } from 'react-bootstrap';
import { loadProfileDetails, patchProfileDetails } from './ProfileDetailsAction';
import { ProfileDetailsFirstRound } from './ProfileDetailsFirstRound';
import { ProfileDetailsSecondRound } from './ProfileDetailsSecondRound';


export class ProfileDetails extends Component {
    static propsTypes = {
        profileDetails: PropsTypes.objectOf(PropsTypes.object),
        candidateId: PropsTypes.objectOf(PropsTypes.object),
    }
    static defaultProps = {
        profileDetails: [],
        candidateId: 1000,
    }
    constructor(props) {
        super(props);
        this.checkValidateForm = this.checkValidateForm.bind(this);
        this.state = {
            // lgShow: false,
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
        };
    }
    componentWillMount() {
        this.props.loadProfileDetails(this.props.candidateId);
    }
    componentWillReceiveProps(nextProps) {
        if (!this.props.profileDetails[0] && nextProps.profileDetails[0]) {
            this.setState({ ...nextProps.profileDetails[0] });
            this.convertDataFromAPI();
        }
    }

    convertDataFromAPI() {
        const techcompetency = document.getElementsByName('tech_competency_round1');
        const cuturalFitLevelRound1 = document.getElementsByName('cultural_fit_round1');
        const techcompetency2 = document.getElementsByName('tech_competency_round2');
        const cuturalFitLevelRound2 = document.getElementsByName('cultural_fit_round2');
        const businessAcumentlevel = document.getElementsByName('business_acument');
        const softSkillslevel = document.getElementsByName('soft_skill');
        const peopleManagementlevel = document.getElementsByName('people_management');
        const arrayOfData = [techcompetency, cuturalFitLevelRound1,
            techcompetency2, cuturalFitLevelRound2, businessAcumentlevel,
            softSkillslevel, peopleManagementlevel];
        const arrayOfTagsName = ['tech_competency_round1', 'cultural_fit_round1',
            'tech_competency_round2', 'cultural_fit_round2', 'business_acument',
            'soft_skill', 'people_management'];
        for (let i = 0; i < arrayOfData.length; i += 1) {
            const data = arrayOfData[i];
            if (this.state[arrayOfTagsName[i]] === 'Limited') {
                data[0].checked = true;
            } else if (this.state[arrayOfTagsName[i]] === 'Basic') {
                data[1].checked = true;
            } else if (this.state[arrayOfTagsName[i]] === 'Acceptable') {
                data[2].checked = true;
            } else if (this.state[arrayOfTagsName[i]] === 'Advanced') {
                data[3].checked = true;
            } else if (this.state[arrayOfTagsName[i]] === 'Exceptional') {
                data[4].checked = true;
            }
        }
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
    submitForm = () => {
        this.checkValidateForm();
        const errorMessages = document.getElementsByClassName('error-message');
        if (errorMessages.length > 0) {
            errorMessages[0].focus();
        } else if (this.props.candidateId !== null) {
            this.props.patchProfileDetails(this.state);
        }
    }
    render() {
        return (
            <section className="profile-details">
                <Grid>
                    <ProfileDetailsFirstRound handleChange={this.handleChange} {...this.state} />
                    <ProfileDetailsSecondRound handleChange={this.handleChange} {...this.state} />
                    <FormGroup className="profile-details__btn">
                        <button onClick={this.submitForm} className="profile-details__submit">SUBMIT</button>
                        <button className="profile-details__cancel">CANCEL</button>
                    </FormGroup>
                </Grid>
            </section>
        );
    }
}
const mapStateToProps = state => ({
    profileDetails: state.profileDetails.dataProfileDetails,
    candidateId: state.profile.profileSelectedId,
});

const mapDispatchToProps = {
    loadProfileDetails,
    patchProfileDetails,
    push, // ACTION GUI EPIC GUI API
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDetails);
