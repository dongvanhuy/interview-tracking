import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Row, Col } from 'react-bootstrap';

export class SecondRound extends Component {
    constructor(props) {
        super(props);
        this.state = {
            interviewerNameRound2: '',
            date_round2: '',
            techcompetency_level_round2: '',
            techcompetency_comment_round2: '',
            cuturalFit_level_round2: '',
            cuturalFitcomment_round2: '',
            resultYPE_round2: '',
            resulttitle_round2: '',
            resultstatus_round2: '',
            resultcomment_round2: '',
            businessAcumentlevel: '',
            businessAcumentcomment: '',
            softSkillslevel: '',
            softSkillscomment: '',
            peopleManagementlevel: '',
            peopleManagementcomment: '',
        };
    }
    handleChange = (e) => {
        const { value, name } = e.target;
        const stateInit = this.state;
        stateInit[name] = value;
        this.setState({ ...stateInit });
        console.log(name, value);
    }

    render() {
        return (
            <section>
                <h2 className="profiledetails__h2--title">2st Round</h2>
                <Row className="show-grid">
                    <Col xs={12} sm={4} md={4} lg={4}>
                        <ControlLabel>Interviewer(s)'s name</ControlLabel>
                        <FormGroup>
                            <FormControl
                                componentClass="select"
                                placeholder="select"
                                className="profiledetails__select"
                                onChange={(e) => this.handleChange(e)}
                                name="interviewerNameRound2"
                            >
                                <option value="">Select</option>
                                <option defaultValue="Huy Dong">Huy Dong</option>
                                <option defaultValue="Huy Chung">Huy Chung</option>
                                <option defaultValue="Trang Nguyen">Trang Nguyen</option>
                            </FormControl>
                        </FormGroup>
                    </Col>
                    <Col xs={12} sm={3} md={3} lg={3}>
                        <FormGroup>
                            <ControlLabel>Date</ControlLabel>
                            <FormControl
                                onChange={(e) => this.handleChange(e)}
                                name="date_round2"
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
                                name="techcompetency_level_round2"
                                onChange={(e) => this.handleChange(e)}
                            />
                            <span className="checkmark" />
                        </label>
                        <label className="profiledetails__radioGroup--item">Basic
                            <input
                                type="radio"
                                value="Basic"
                                name="techcompetency_level_round2"
                                onChange={(e) => this.handleChange(e)}
                            />
                            <span className="checkmark" />
                        </label>
                        <label className="profiledetails__radioGroup--item">Acceptable
                            <input
                                type="radio"
                                value="Acceptable"
                                name="techcompetency_level_round2"
                                onChange={(e) => this.handleChange(e)}
                            />
                            <span className="checkmark" />
                        </label>
                        <label className="profiledetails__radioGroup--item">Advanced
                            <input
                                type="radio"
                                value="Advanced"
                                name="techcompetency_level_round2"
                                onChange={(e) => this.handleChange(e)}
                            />
                            <span className="checkmark" />
                        </label>
                        <label className="profiledetails__radioGroup--item">Exceptional
                            <input
                                type="radio"
                                value="Exceptional"
                                name="techcompetency_level_round2"
                                onChange={(e) => this.handleChange(e)}
                            />
                            <span className="checkmark" />
                        </label>
                    </div>

                    <FormGroup>
                        <span className="profiledetails__comments">Comment:</span>
                        <FormControl
                            componentClass="textarea"
                            name="techcompetency_comment_round2"
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
                                name="cuturalFit_level_round2"
                                onChange={(e) => this.handleChange(e)}
                            />
                            <span className="checkmark" />
                        </label>
                        <label className="profiledetails__radioGroup--item">Basic
                            <input
                                type="radio"
                                value="Basic"
                                name="cuturalFit_level_round2"
                                onChange={(e) => this.handleChange(e)}
                            />
                            <span className="checkmark" />
                        </label>
                        <label className="profiledetails__radioGroup--item">Acceptable
                            <input
                                type="radio"
                                value="Acceptable"
                                name="cuturalFit_level_round2"
                                onChange={(e) => this.handleChange(e)}
                            />
                            <span className="checkmark" />
                        </label>
                        <label className="profiledetails__radioGroup--item">Advanced
                            <input
                                type="radio"
                                value="Advanced"
                                name="cuturalFit_level_round2"
                                onChange={(e) => this.handleChange(e)}
                            />
                            <span className="checkmark" />
                        </label>
                        <label className="profiledetails__radioGroup--item">Exceptional
                            <input
                                type="radio"
                                value="Exceptional"
                                name="cuturalFit_level_round2"
                                onChange={(e) => this.handleChange(e)}
                            />
                            <span className="checkmark" />
                        </label>
                    </div>
                    <FormGroup>
                        <span className="profiledetails__comments">Comment:</span>
                        <FormControl
                            componentClass="textarea"
                            name="cuturalFitcomment_round2"
                            onChange={(e) => (this.handleChange(e))}
                        />
                    </FormGroup>
                </FormGroup>

                <FormGroup>
                    <ControlLabel>Bussiness Acument</ControlLabel>
                    <div className="profiledetails__radioGroup">
                        <label className="profiledetails__radioGroup--item">Limited
                            <input
                                type="radio"
                                value="Limited"
                                name="businessAcumentlevel"
                                onChange={(e) => this.handleChange(e)}
                            />
                            <span className="checkmark" />
                        </label>
                        <label className="profiledetails__radioGroup--item">Basic
                            <input
                                type="radio"
                                value="Basic"
                                name="businessAcumentlevel"
                                onChange={(e) => this.handleChange(e)}
                            />
                            <span className="checkmark" />
                        </label>
                        <label className="profiledetails__radioGroup--item">Acceptable
                            <input
                                type="radio"
                                value="Acceptable"
                                name="businessAcumentlevel"
                                onChange={(e) => this.handleChange(e)}
                            />
                            <span className="checkmark" />
                        </label>
                        <label className="profiledetails__radioGroup--item">Advanced
                            <input
                                type="radio"
                                value="Advanced"
                                name="businessAcumentlevel"
                                onChange={(e) => this.handleChange(e)}
                            />
                            <span className="checkmark" />
                        </label>
                        <label className="profiledetails__radioGroup--item">Exceptional
                            <input
                                type="radio"
                                value="Exceptional"
                                name="businessAcumentlevel"
                                onChange={(e) => this.handleChange(e)}
                            />
                            <span className="checkmark" />
                        </label>
                    </div>
                    <FormGroup>
                        <span className="profiledetails__comments">Comment:</span>
                        <FormControl
                            componentClass="textarea"
                            name="businessAcumentcomment"
                            onChange={(e) => (this.handleChange(e))}
                        />
                    </FormGroup>
                </FormGroup>

                <FormGroup>
                    <ControlLabel>Soft skills</ControlLabel>
                    <div className="profiledetails__radioGroup">
                        <label className="profiledetails__radioGroup--item">Limited
                            <input
                                type="radio"
                                value="Limited"
                                name="softSkillslevel"
                                onChange={(e) => this.handleChange(e)}
                            />
                            <span className="checkmark" />
                        </label>
                        <label className="profiledetails__radioGroup--item">Basic
                            <input
                                type="radio"
                                value="Basic"
                                name="softSkillslevel"
                                onChange={(e) => this.handleChange(e)}
                            />
                            <span className="checkmark" />
                        </label>
                        <label className="profiledetails__radioGroup--item">Acceptable
                            <input
                                type="radio"
                                value="Acceptable"
                                name="softSkillslevel"
                                onChange={(e) => this.handleChange(e)}
                            />
                            <span className="checkmark" />
                        </label>
                        <label className="profiledetails__radioGroup--item">Advanced
                            <input
                                type="radio"
                                value="Advanced"
                                name="softSkillslevel"
                                onChange={(e) => this.handleChange(e)}
                            />
                            <span className="checkmark" />
                        </label>
                        <label className="profiledetails__radioGroup--item">Exceptional
                            <input
                                type="radio"
                                value="Exceptional"
                                name="softSkillslevel"
                                onChange={(e) => this.handleChange(e)}
                            />
                            <span className="checkmark" />
                        </label>
                    </div>
                    <FormGroup>
                        <span className="profiledetails__comments">Comment:</span>
                        <FormControl
                            componentClass="textarea"
                            name="softSkillscomment"
                            onChange={(e) => (this.handleChange(e))}
                        />
                    </FormGroup>
                </FormGroup>

                <FormGroup>
                    <ControlLabel>People Management</ControlLabel>
                    <div className="profiledetails__radioGroup">
                        <label className="profiledetails__radioGroup--item">Limited
                            <input
                                type="radio"
                                value="Limited"
                                name="peopleManagementlevel"
                                onChange={(e) => this.handleChange(e)}
                            />
                            <span className="checkmark" />
                        </label>
                        <label className="profiledetails__radioGroup--item">Basic
                            <input
                                type="radio"
                                value="Basic"
                                name="peopleManagementlevel"
                                onChange={(e) => this.handleChange(e)}
                            />
                            <span className="checkmark" />
                        </label>
                        <label className="profiledetails__radioGroup--item">Acceptable
                            <input
                                type="radio"
                                value="Acceptable"
                                name="peopleManagementlevel"
                                onChange={(e) => this.handleChange(e)}
                            />
                            <span className="checkmark" />
                        </label>
                        <label className="profiledetails__radioGroup--item">Advanced
                            <input
                                type="radio"
                                value="Advanced"
                                name="peopleManagementlevel"
                                onChange={(e) => this.handleChange(e)}
                            />
                            <span className="checkmark" />
                        </label>
                        <label className="profiledetails__radioGroup--item">Exceptional
                            <input
                                type="radio"
                                value="Exceptional"
                                name="peopleManagementlevel"
                                onChange={(e) => this.handleChange(e)}
                            />
                            <span className="checkmark" />
                        </label>
                    </div>
                    <FormGroup>
                        <span className="profiledetails__comments">Comment:</span>
                        <FormControl
                            componentClass="textarea"
                            name="peopleManagementcomment"
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
                                name="resultYPE_round2"
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
                                name="resulttitle_round2"
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
                            <ControlLabel>2st Round Status</ControlLabel>
                            <FormControl
                                componentClass="select"
                                placeholder="select"
                                className="profiledetails__select"
                                name="resultstatus_round2"
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
                        name="resultcomment_round2"
                        onChange={(e) => (this.handleChange(e))}
                    />
                </FormGroup>
            </section>
        );
    }
}

export default SecondRound;
