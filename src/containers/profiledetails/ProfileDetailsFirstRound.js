import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Row, Col } from 'react-bootstrap';
import Datetime from 'react-datetime';
import FontAwesomeIcon from 'react-fontawesome';
import moment from 'moment';

export class ProfileDetailsFirstRound extends Component {
    state = {
        showTimeRoundOne: false,
        showTimeDateMeeting: false,
    }

    showTimeOne = () => {
        const show = this.state.showTimeRoundOne;
        this.setState({ showTimeRoundOne: !show });
    }
    showDateMeeting = () => {
        const show = this.state.showTimeDateMeeting;
        this.setState({ showTimeDateMeeting: !show });
    }

    render() {
        return (
            <React.Fragment>
                <Row className="show-grid">
                    <Col xs={12} sm={6} md={6} lg={6}>
                        <h2 className="profile-details__title">Candidate Info</h2>
                        <FormGroup>
                            <ControlLabel>Candidate's Full Name(<span style={{ color: 'red' }}>*</span>) </ControlLabel>
                            <FormControl
                                type="text"
                                placeholder=""
                                name="candidate_fullname"
                                value={this.props.candidate_fullname}
                                onChange={(e) => this.props.handleChange(e)}
                            />
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
                            <ControlLabel>Date Meeting(<span style={{ color: 'red' }}>*</span>)</ControlLabel>
                            <Datetime
                                inputProps={{ disabled: true }}
                                open={this.state.showTimeDateMeeting} // ISO Date
                                value={moment.utc(this.props.date_meeting).format('DD-MM-YYYY HH:mm')}
                                dateFormat="DD-MM-YYYY"
                                timeFormat="HH:mm"
                                utc
                                defaultValue="DD-MM-YYYY HH:mm"
                                onChange={(e) => this.props.handleChange({ target: { value: e, name: 'date_meeting' } })}
                            />
                            <FontAwesomeIcon
                                name="calendar"
                                size="2x"
                                className="date-time__icon"
                                onClick={() => this.showDateMeeting()
                                }
                            />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Recruiter</ControlLabel>
                            <FormControl
                                componentClass="select"
                                className="profiledetails__select"
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
                    </Col>
                </Row>
                <h2 className="profile-details__title">1st Round</h2>
                <Row className="show-grid">
                    <Col xs={12} sm={9} md={9} lg={9}>
                        <ControlLabel>Interviewer(s)'s name(<span style={{ color: 'red' }}>*</span>)    </ControlLabel>
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
                                inputProps={{ disabled: true }}
                                open={this.state.showTimeRoundOne}
                                value={moment.utc(this.props.date_round1).format('DD-MM-YYYY HH:mm')}
                                dateFormat="DD-MM-YYYY"
                                timeFormat="HH:mm"
                                utc
                                defaultValue="DD-MM-YYYY HH:mm"
                                onChange={(e) => this.props.handleChange({ target: { value: e, name: 'date_round1' } })}
                            />
                            <FontAwesomeIcon
                                name="calendar"
                                size="2x"
                                className="date-time__icon"
                                onClick={() => this.showTimeOne()
                                }
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
                        <span className="profile-details__comments">Comment:</span>
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
                        <span className="profile-details__comments">Comment:</span>
                        <FormControl
                            componentClass="textarea"
                            name="cultural_fit_round1_cmt"
                            value={this.props.cultural_fit_round1_cmt}
                            onChange={(e) => this.props.handleChange(e)}
                        />
                    </FormGroup>
                </FormGroup>
                <h3>Result</h3>
                <Row>
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
                    <span className="profile-details__comments">Comment:</span>
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
