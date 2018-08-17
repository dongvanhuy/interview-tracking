import { connect } from 'react-redux';
import PropsTypes from 'prop-types';
import React, { Component } from 'react';
import { FormGroup, Grid } from 'react-bootstrap';
import { loadProfileDetails } from './ProfileDetailsAction';
import { ProfileDetailsFirstRound } from './ProfileDetailsFirstRound';
import { ProfileDetailsSecondRound } from './ProfileDetailsSecondRound';


export class ProfileInfo extends Component {
    static propsTypes = {
        profileDetails: PropsTypes.arrayOf(PropsTypes.object),
    }
    static defaultProps = {
        profileDetails: [],
    }
    constructor(props) {
        super(props);
        this.state = {
            lgShow: false,
            candidateName: '',
            position: '',
            recruiter: '',
            englishlevel: '',
            englishlevelnote: '',
            interviewerRound1_01: '',
            interviewerRound1_02: '',
            date_round1: '',
            techcompetency_level_round1: '',
            techcompetency_comment_round1: '',
            cuturalFit_level_round1: '',
            cuturalFitcomment_round1: '',
            resultYPE_round1: '',
            resulttitle_round1: '',
            resultstatus_round1: '',
            resultcomment_round1: '',
        };
    }

    componentWillMount() {
        this.props.loadProfileDetails();
    }

    handleChange = e => {
        const { value, name } = e.target;
        const stateInit = this.state;
        stateInit[name] = value;
        this.setState({ ...stateInit });
        if (name === 'candidateName' && value === '') {
            // this.txtInput.current.focus;
            // add Class
        } else if (name === 'candidateName') {
            // remove class
        }
        console.log(e.target.value);
        console.log(this.state);
    }
    submitForm = () => {
        // const candidateName = $("input[name='candidateName']");
        // if (candidateName.val() === '') {
        //     candidateName.addClass('error-message');
        //     candidateName.focus();
        //     return e.preventDefault();
        // }
        // if (candidateName.val() !== '') {
        //     $('#profiledetails__model--success').css('visibility', 'visible');
        //     // this.setState({lgShow: true});
        // } else {
        //     // update and go to profile page
        // }
        // return true; // don't work
    }
    testAPI(id) { // use id from profile page to load Profile Details
        const data = this.props.profileDetails;
        for (let i = 0; i < data.length; i += 1) {
            if (parseInt(data[i].id, 10) === id) {
                // use react to query and set val
                // set statename similar name API
                // store state
                break;
            }
        }
    }
    render() {
        return (
            <section className="profiledetails">
                <Grid>
                    <h1 className="profiledetails--title">
                        Candidate Assessment Summary Form
                    </h1>
                    <ProfileDetailsFirstRound handleChange={this.handleChange} />
                    <ProfileDetailsSecondRound handleChange={this.handleChange} />
                    <FormGroup className="profiledetails__btn">
                        <button onClick={this.submitForm} className="profiledetails__btn--submit">SUBMIT</button>
                        <button className="profiledetails__btn--cancel">CANCEL</button>
                    </FormGroup>
                </Grid>
            </section>
        );
    }
}
const mapStateToProps = state => ({
    profileDetails: state.profileDetails.dataProfileDetails,
});

const mapDispatchToProps = {
    loadProfileDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileInfo);
