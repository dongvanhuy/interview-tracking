import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Row, Col } from 'react-bootstrap';
import Datetime from 'react-datetime';
import FontAwesomeIcon from 'react-fontawesome';
import moment from 'moment';

export class ProfileDetailsFirstRound extends Component {
    constructor(props) {
        super(props);
        this.startMeeting = React.createRef();
        this.endMeeting = React.createRef();
        this.dateRound1 = React.createRef();
    }
    state = {
        showTimeRoundOne: false,
        showStartMeeting: false,
        showEndMeeting: false,
    }

    componentDidMount() {
        this.focus();
    }

    showTimeOne = () => {
        const show = this.state.showTimeRoundOne;
        this.setState({ showTimeRoundOne: !show });
    }

    showStartMeeting = () => {
        const { showStartMeeting } = this.state;
        this.setState({ showStartMeeting: !showStartMeeting });
    }

    showEndMeeting = () => {
        const show = this.state.showEndMeeting;
        this.setState({ showEndMeeting: !show });
    }

    focus() {
        this.textInput.focus();
    }

    render() {
        const { errorMessages } = this.props;
        return (
            <React.Fragment>
                <Row className="show-grid">
                    <Col xs={12} sm={6} md={6} lg={6}>
                        <h2 className="profile-details__title">Candidate Info</h2>
                        <FormGroup>
                            <ControlLabel>Candidate's Full Name(<span className="span">*</span>) </ControlLabel>
                            <FormControl
                                inputRef={ref => { this.textInput = ref; }}
                                type="text"
                                placeholder=""
                                name="candidate_fullname"
                                value={this.props.candidate_fullname}
                                onChange={(e) => this.props.handleChange(e)}
                            />
                            {errorMessages.errFullname && <span className="error_msg">{errorMessages.errFullname}</span>}
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Position Interview</ControlLabel>
                            <FormControl
                                type="text"
                                placeholder=""
                                name="position_apply"
                                value={this.props.position_apply}
                                onChange={(e) => this.props.handleChange(e)}
                            />
                        </FormGroup>
                        <FormGroup className="date-time__one">
                            <ControlLabel>Start Meeting(<span className="span">*</span>)</ControlLabel>
                            <Datetime
                                inputProps={{ readOnly: true }}
                                value={moment.utc(this.props.start_time).format('DD-MM-YYYY HH:mm')}
                                dateFormat="DD-MM-YYYY"
                                timeFormat="HH:mm"
                                ref={this.startMeeting}
                                utc
                                defaultValue="DD-MM-YYYY HH:mm"
                                onChange={(e) => this.props.handleChange({ target: { value: e, name: 'start_time' } })}
                            />
                            <FontAwesomeIcon
                                name="calendar"
                                size="2x"
                                className="date-time__icon"
                                onClick={() => this.startMeeting.current.openCalendar()}
                            />
                            {errorMessages.errStartTimeMeeting && <span className="error_msg">{errorMessages.errStartTimeMeeting}</span>}
                        </FormGroup>
                        <FormGroup className="date-time__one">
                            <ControlLabel>End Meeting(<span className="span">*</span>)</ControlLabel>
                            <Datetime
                                inputProps={{ readOnly: true }}
                                value={moment.utc(this.props.end_time).format('DD-MM-YYYY HH:mm')}
                                dateFormat="DD-MM-YYYY"
                                timeFormat="HH:mm"
                                ref={this.endMeeting}
                                utc
                                defaultValue="DD-MM-YYYY HH:mm"
                                onChange={(e) => this.props.handleChange({ target: { value: e, name: 'end_time' } })}
                            />
                            <FontAwesomeIcon
                                name="calendar"
                                size="2x"
                                className="date-time__icon"
                                onClick={() => this.endMeeting.current.openCalendar()}
                            />
                            {errorMessages.errEndTimeMeeting && <span className="error_msg">{errorMessages.errEndTimeMeeting}</span>}
                        </FormGroup>
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={6}>
                        <h2 className="profile-details__title">HR Interview</h2>
                        <FormGroup>
                            <ControlLabel>English Level</ControlLabel>
                            <FormControl
                                type="text"
                                placeholder=""
                                name="eng_level"
                                value={this.props.eng_level}
                                onChange={(e) => this.props.handleChange(e)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Note</ControlLabel>
                            <FormControl
                                componentClass="textarea"
                                rows={4}
                                name="eng_level_cmt"
                                value={this.props.eng_level_cmt}
                                onChange={(e) => this.props.handleChange(e)}
                            />
                        </FormGroup>
                        <FormGroup className="profile-details__recuiter">
                            <ControlLabel>Recruiter</ControlLabel>
                            <FormControl
                                componentClass="select"
                                className="profile-details__select"
                                name="recruiter"
                                value={this.props.recruiter}
                                placeholder="Select"
                                onChange={(e) => this.props.handleChange(e)}
                            >
                                <option value="">Select</option>
                                <option value="Duyen Tran">Duyen Tran</option>
                                <option value="Vy Phan">Vy Phan</option>
                                <option value="Nhu Huynh">Nhu Huynh</option>
                            </FormControl>
                        </FormGroup>
                    </Col>
                </Row>
                <h2 className="profile-details__title">1st Round</h2>
                <Row className="show-grid">
                    <Col xs={12} sm={9} md={9} lg={9}>
                        <ControlLabel>Interviewer(s)'s name(<span className="span">*</span>)</ControlLabel>
                        <Row className="show-grid">
                            <Col xs={12} sm={6} md={6} lg={6}>
                                <FormGroup>
                                    <FormControl
                                        componentClass="select"
                                        placeholder="select"
                                        className="profiledetails__select"
                                        onChange={(e) => this.props.handleChange(e)}
                                        name="jury_round1_01"
                                        value={this.props.jury_round1_01}
                                    >
                                        <option value="">Select</option>
                                        <option value="1">Huy Dong</option>
                                        <option value="2">Huy Chung</option>
                                        <option value="3">Trang Nguyen</option>
                                    </FormControl>
                                </FormGroup>
                                {errorMessages.errInterviewer && <span className="error_msg">{errorMessages.errInterviewer}</span>}
                            </Col>
                            <Col xs={12} sm={6} md={6} lg={6}>
                                <FormGroup>
                                    <FormControl
                                        componentClass="select"
                                        placeholder="select"
                                        className="profiledetails__select"
                                        onChange={(e) => this.props.handleChange(e)}
                                        name="jury_round1_02"
                                        value={this.props.jury_round1_02}
                                    >
                                        <option value="">Select</option>
                                        <option value="1">Huy Dong</option>
                                        <option value="2">Huy Chung</option>
                                        <option value="3">Trang Nguyen</option>
                                    </FormControl>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} sm={3} md={3} lg={3}>
                        <FormGroup className="date-time__one">
                            <ControlLabel>Date</ControlLabel>
                            <Datetime
                                inputProps={{ readOnly: true }}
                                // open={this.state.showTimeRoundOne}
                                value={moment.utc(this.props.date_round1).format('DD-MM-YYYY HH:mm')}
                                dateFormat="DD-MM-YYYY"
                                timeFormat="HH:mm"
                                ref={this.dateRound1}
                                utc
                                defaultValue="DD-MM-YYYY HH:mm"
                                onChange={(e) => this.props.handleChange({ target: { value: e, name: 'date_round1' } })}
                            />
                            <FontAwesomeIcon
                                name="calendar"
                                size="2x"
                                className="date-time__icon"
                                onClick={() => this.dateRound1.current.openCalendar()}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <ControlLabel>Technical Competency</ControlLabel>
                    <div className="radio-group">
                        <label className="radio-group__item">Limited
                            <input
                                type="radio"
                                value="Limited"
                                name="tech_competency_round1"
                                onChange={(e) => this.props.handleChange(e)}
                                checked={this.props.tech_competency_round1 === 'Limited'}
                            />
                            <span className="checkmark" />
                        </label>
                        <label className="radio-group__item">Basic
                            <input
                                type="radio"
                                value="Basic"
                                name="tech_competency_round1"
                                onChange={(e) => this.props.handleChange(e)}
                                checked={this.props.tech_competency_round1 === 'Basic'}
                            />
                            <span className="checkmark" />
                        </label>
                        <label className="radio-group__item">Acceptable
                            <input
                                type="radio"
                                value="Acceptable"
                                name="tech_competency_round1"
                                onChange={(e) => this.props.handleChange(e)}
                                checked={this.props.tech_competency_round1 === 'Acceptable'}
                            />
                            <span className="checkmark" />
                        </label>
                        <label className="radio-group__item">Advanced
                            <input
                                type="radio"
                                value="Advanced"
                                onChange={(e) => this.props.handleChange(e)}
                                name="tech_competency_round1"
                                checked={this.props.tech_competency_round1 === 'Advanced'}
                            />
                            <span className="checkmark" />
                        </label>
                        <label className="radio-group__item">Exceptional
                            <input
                                type="radio"
                                value="Exceptional"
                                onChange={(e) => this.props.handleChange(e)}
                                name="tech_competency_round1"
                                checked={this.props.tech_competency_round1 === 'Exceptional'}
                            />
                            <span className="checkmark" />
                        </label>
                    </div>

                    <FormGroup>
                        <ControlLabel>Comment:</ControlLabel>
                        <FormControl
                            componentClass="textarea"
                            name="tech_competency_round1_cmt"
                            value={this.props.tech_competency_round1_cmt}
                            onChange={(e) => this.props.handleChange(e)}
                        />
                    </FormGroup>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Cutural Fit</ControlLabel>
                    <div className="radio-group">
                        <label className="radio-group__item">Limited
                            <input
                                type="radio"
                                value="Limited"
                                name="cultural_fit_round1"
                                onChange={(e) => this.props.handleChange(e)}
                                checked={this.props.cultural_fit_round1 === 'Limited'}
                            />
                            <span className="checkmark" />
                        </label>
                        <label className="radio-group__item">Basic
                            <input
                                type="radio"
                                value="Basic"
                                name="cultural_fit_round1"
                                onChange={(e) => this.props.handleChange(e)}
                                checked={this.props.cultural_fit_round1 === 'Basic'}
                            />
                            <span className="checkmark" />
                        </label>
                        <label className="radio-group__item">Acceptable
                            <input
                                type="radio"
                                value="Acceptable"
                                name="cultural_fit_round1"
                                onChange={(e) => this.props.handleChange(e)}
                                checked={this.props.cultural_fit_round1 === 'Acceptable'}
                            />
                            <span className="checkmark" />
                        </label>
                        <label className="radio-group__item">Advanced
                            <input
                                type="radio"
                                value="Advanced"
                                name="cultural_fit_round1"
                                onChange={(e) => this.props.handleChange(e)}
                                checked={this.props.cultural_fit_round1 === 'Advanced'}
                            />
                            <span className="checkmark" />
                        </label>
                        <label className="radio-group__item">Exceptional
                            <input
                                type="radio"
                                value="Exceptional"
                                name="cultural_fit_round1"
                                onChange={(e) => this.props.handleChange(e)}
                                checked={this.props.cultural_fit_round1 === 'Exceptional'}
                            />
                            <span className="checkmark" />
                        </label>
                    </div>

                    <FormGroup>
                        <ControlLabel>Comment:</ControlLabel>
                        <FormControl
                            componentClass="textarea"
                            name="cultural_fit_round1_cmt"
                            value={this.props.cultural_fit_round1_cmt}
                            onChange={(e) => this.props.handleChange(e)}
                        />
                    </FormGroup>
                </FormGroup>
                <Row className="show-grid">
                    <Col xs={12} sm={4} md={4} lg={4}>
                        <FormGroup>
                            <ControlLabel>YPE</ControlLabel>
                            <FormControl
                                type="number"
                                placeholder=""
                                name="ype_round1"
                                value={this.props.ype_round1}
                                onChange={(e) => this.props.handleChange(e)}
                            />
                        </FormGroup>
                    </Col>
                    <Col xs={12} sm={4} md={4} lg={4}>
                        <FormGroup>
                            <ControlLabel>Title</ControlLabel>
                            <FormControl
                                componentClass="select"
                                placeholder="select"
                                className="profile-details__select"
                                name="title_round1"
                                value={this.props.title_round1}
                                onChange={(e) => this.props.handleChange(e)}
                            >
                                <option value="">Select</option>
                                <option value="Assoc Prof">Assoc Prof</option>
                                <option value="Prof">Prof</option>
                                <option value="Snr Prof">Snr Prof</option>
                            </FormControl>
                        </FormGroup>
                    </Col>
                    <Col xs={12} sm={4} md={4} lg={4}>
                        <FormGroup>
                            <ControlLabel>1st Round Status</ControlLabel>
                            <FormControl
                                componentClass="select"
                                placeholder="select"
                                className="profiled-etails__select"
                                name="round1_status"
                                value={this.props.round1_status}
                                onChange={(e) => this.props.handleChange(e)}
                            >
                                <option value="">Select</option>
                                <option value="Passed">Passed</option>
                                <option value="KIV">KIV</option>
                                <option value="Fail">Fail</option>
                            </FormControl>
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <ControlLabel>Comment:</ControlLabel>
                    <FormControl
                        componentClass="textarea"
                        name="cmt_result_round1"
                        value={this.props.cmt_result_round1}
                        onChange={(e) => this.props.handleChange(e)}
                    />
                </FormGroup>
            </React.Fragment>
        );
    }
}

export default ProfileDetailsFirstRound;
