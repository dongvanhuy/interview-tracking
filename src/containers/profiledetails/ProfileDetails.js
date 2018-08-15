import { connect } from 'react-redux';
import PropsTypes from 'prop-types';
import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Grid, Row, Col, Button } from 'react-bootstrap';
import { SecondRound } from './ProfileDetailsSecondRound';
import { loadProfileDetails } from './ProfileDetailsAction';
import $ from '../../../node_modules/jquery';


export class FirstRound extends Component {
    static propsTypes = {
        profileDetails: PropsTypes.arrayOf(PropsTypes.object), // object + render
    }
    static defaultProps = {
        profileDetails: [],
    }
    constructor(props) {
        super(props);
        // this.txtInput = React.createRef();
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

    handleChange = (e) => {
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
    submitForm = e => {
        const candidateName = $("input[name='candidateName']");
        if (candidateName.val() === '') {
            candidateName.addClass('error-message');
            candidateName.focus();
            return e.preventDefault();
        }
        if (candidateName.val() !== '') {
            $('#profiledetails__model--success').css('visibility', 'visible');
            // this.setState({lgShow: true});
        } else {
            // update and go to profile page
        }
        return true; // don't work
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
        // let { lgClose } = this.state;
        return (
            <section className="profiledetails">
                <Button onClick={() => { this.testAPI(1); }}> test Api</Button>
                {/* <SuccessModal show={this.lgShow}></SuccessModal> */}
                <h1 className="profiledetails--title">
                    Candidate Assessment Summary Form
                </h1>
                <Grid>
                    <form>
                        <Row className="show-grid">
                            <Col xs={12} sm={6} md={6} lg={6}>
                                <h2 className="profiledetails__h2--title">Candidate Info</h2>
                                <FormGroup>
                                    <ControlLabel>Candidate's Full Name</ControlLabel>
                                    <FormControl
                                        type="text"
                                        placeholder=""
                                        name="candidateName"
                                        /* ref={this.txtInput} */
                                        onChange={(e) => this.handleChange(e)}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <ControlLabel>Position Interview</ControlLabel>
                                    <FormControl
                                        type="text"
                                        placeholder=""
                                        name="position"
                                        onChange={(e) => this.handleChange(e)}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <ControlLabel>Recruiter</ControlLabel>
                                    <FormControl
                                        componentClass="select"
                                        className="profiledetails__select"
                                        onChange={(e) => this.handleChange(e)}
                                        name="recruiter"
                                        placeholder="Select"
                                    >
                                        <option value="">Select</option>
                                        <option value="Duyen Tran1">Duyen Tran</option>
                                        <option value="Vy Phan">Vy Phan</option>
                                        <option value="Nhu Huynh">Nhu Huynh</option>
                                    </FormControl>
                                </FormGroup>
                            </Col>
                            <Col xs={12} sm={6} md={6} lg={6}>
                                <h2 className="profiledetails__h2--title">HR Interview</h2>
                                <FormGroup>
                                    <ControlLabel>English Level</ControlLabel>
                                    <FormControl
                                        type="text"
                                        placeholder=""
                                        name="englishlevel"
                                        onChange={(e) => this.handleChange(e)}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <ControlLabel>Note</ControlLabel>
                                    <FormControl
                                        componentClass="textarea"
                                        rows={4}
                                        name="englishlevelnote"
                                        onChange={(e) => this.handleChange(e)}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <h2 className="profiledetails__h2--title">1st Round</h2>
                        <Row className="show-grid">
                            <Col xs={12} sm={9} md={9} lg={9}>
                                <ControlLabel>Interviewer(s)'s name</ControlLabel>
                                <Row className="show-grid">
                                    <Col xs={12} sm={6} md={6} lg={6}>
                                        <FormGroup>
                                            <FormControl
                                                componentClass="select"
                                                placeholder="select"
                                                className="profiledetails__select"
                                                onChange={(e) => this.handleChange(e)}
                                                name="interviewerRound1_01"
                                            >
                                                <option value="">Select</option>
                                                <option defaultValue="Huy Dong">Huy Dong</option>
                                                <option defaultValue="Huy Chung">Huy Chung</option>
                                                <option defaultValue="Trang Nguyen">Trang Nguyen</option>
                                            </FormControl>
                                        </FormGroup>

                                    </Col>
                                    <Col xs={12} sm={6} md={6} lg={6}>
                                        <FormGroup>
                                            <FormControl
                                                componentClass="select"
                                                placeholder="select"
                                                className="profiledetails__select"
                                                onChange={(e) => this.handleChange(e)}
                                                name="interviewerRound1_02"
                                            >
                                                <option value="">Select</option>
                                                <option defaultValue="Huy Dong">Huy Dong</option>
                                                <option defaultValue="Huy Chung">Huy Chung</option>
                                                <option defaultValue="Trang Nguyen">Trang Nguyen</option>
                                            </FormControl>
                                        </FormGroup>

                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={12} sm={3} md={3} lg={3}>
                                <FormGroup>
                                    <ControlLabel>Date</ControlLabel>

                                    <FormControl
                                        onChange={(e) => this.handleChange(e)}
                                        name="date_round1"
                                        type="date"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup>
                            <ControlLabel>Technical Competency</ControlLabel>
                            <div className="profiledetails__radioGroup">
                                <label className="profiledetails__radioGroup--item">Limited
                                    <input
                                        type="radio"
                                        value="Limited"
                                        name="techcompetency_level_round1"
                                        onChange={(e) => this.handleChange(e)}
                                    />
                                    <span className="checkmark" />
                                </label>
                                <label className="profiledetails__radioGroup--item">Basic
                                    <input
                                        type="radio"
                                        value="Basic"
                                        name="techcompetency_level_round1"
                                        onChange={(e) => this.handleChange(e)}
                                    />
                                    <span className="checkmark" />
                                </label>
                                <label className="profiledetails__radioGroup--item">Acceptable
                                    <input
                                        type="radio"
                                        value="Acceptable"
                                        name="techcompetency_level_round1"
                                        onChange={(e) => this.handleChange(e)}
                                    />
                                    <span className="checkmark" />
                                </label>
                                <label className="profiledetails__radioGroup--item">Advanced
                                    <input
                                        type="radio"
                                        value="Advanced"
                                        name="techcompetency_level_round1"
                                        onChange={(e) => this.handleChange(e)}
                                    />
                                    <span className="checkmark" />
                                </label>
                                <label className="profiledetails__radioGroup--item">Exceptional
                                    <input
                                        type="radio"
                                        value="Exceptional"
                                        name="techcompetency_level_round1"
                                        onChange={(e) => this.handleChange(e)}
                                    />
                                    <span className="checkmark" />
                                </label>
                            </div>

                            <FormGroup>
                                <span className="profiledetails__comments">Comment:</span>
                                <FormControl
                                    componentClass="textarea"
                                    name="techcompetency_comment_round1"
                                    onChange={(e) => (this.handleChange(e))}
                                />
                            </FormGroup>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Cutural Fit</ControlLabel>
                            <div className="profiledetails__radioGroup">
                                <label className="profiledetails__radioGroup--item">Limited
                                    <input
                                        type="radio"
                                        value="Limited"
                                        name="cuturalFit_level_round1"
                                        onChange={(e) => this.handleChange(e)}
                                    />
                                    <span className="checkmark" />
                                </label>
                                <label className="profiledetails__radioGroup--item">Basic
                                    <input
                                        type="radio"
                                        value="Basic"
                                        name="cuturalFit_level_round1"
                                        onChange={(e) => this.handleChange(e)}
                                    />
                                    <span className="checkmark" />
                                </label>
                                <label className="profiledetails__radioGroup--item">Acceptable
                                    <input
                                        type="radio"
                                        value="Acceptable"
                                        name="cuturalFit_level_round1"
                                        onChange={(e) => this.handleChange(e)}
                                    />
                                    <span className="checkmark" />
                                </label>
                                <label className="profiledetails__radioGroup--item">Advanced
                                    <input
                                        type="radio"
                                        value="Advanced"
                                        name="cuturalFit_level_round1"
                                        onChange={(e) => this.handleChange(e)}
                                    />
                                    <span className="checkmark" />
                                </label>
                                <label className="profiledetails__radioGroup--item">Exceptional
                                    <input
                                        type="radio"
                                        value="Exceptional"
                                        name="cuturalFit_level_round1"
                                        onChange={(e) => this.handleChange(e)}
                                    />
                                    <span className="checkmark" />
                                </label>
                            </div>

                            <FormGroup>
                                <span className="profiledetails__comments">Comment:</span>
                                <FormControl
                                    componentClass="textarea"
                                    name="cuturalFitcomment_round1"
                                    onChange={(e) => (this.handleChange(e))}
                                />
                            </FormGroup>
                        </FormGroup>
                        <h3>Result</h3>
                        <Row>
                            <Col xs={12} sm={4} md={4} lg={4}>
                                <FormGroup>
                                    <ControlLabel>YPE</ControlLabel>
                                    <FormControl
                                        type="text"
                                        placeholder=""
                                        name="resultYPE_round1"
                                        onChange={(e) => (this.handleChange(e))}
                                    />
                                </FormGroup>
                            </Col>
                            <Col xs={12} sm={4} md={4} lg={4}>
                                <FormGroup>
                                    <ControlLabel>Title</ControlLabel>
                                    <FormControl
                                        componentClass="select"
                                        placeholder="select"
                                        className="profiledetails__select"
                                        name="resulttitle_round1"
                                        onChange={(e) => (this.handleChange(e))}
                                    >
                                        <option value="">Select</option>
                                        <option defaultValue="Assoc Prof">Assoc Prof</option>
                                        <option defaultValue="Prof">Prof</option>
                                        <option defaultValue="Snr Prof">Snr Prof</option>
                                    </FormControl>
                                </FormGroup>
                            </Col>
                            <Col xs={12} sm={4} md={4} lg={4}>
                                <FormGroup>
                                    <ControlLabel>1st Round Status</ControlLabel>
                                    <FormControl
                                        componentClass="select"
                                        placeholder="select"
                                        className="profiledetails__select"
                                        name="resultstatus_round1"
                                        onChange={(e) => (this.handleChange(e))}
                                    >
                                        <option value="">Select</option>
                                        <option defaultValue="Passed">Passed</option>
                                        <option defaultValue="KIV">KIV</option>
                                        <option defaultValue="Fail">Fail</option>
                                    </FormControl>
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup>
                            <span className="profiledetails__comments">Comment:</span>
                            <FormControl
                                componentClass="textarea"
                                name="resultcomment_round1"
                                onChange={(e) => (this.handleChange(e))}
                            />
                        </FormGroup>
                        <SecondRound />
                        <FormGroup className="profiledetails__btn">
                            <button onClick={this.submitForm} className="profiledetails__btn--submit">SUBMIT</button>
                            <button className="profiledetails__btn--cancel">CANCEL</button>
                        </FormGroup>
                    </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(FirstRound);
