import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Row, Col } from 'react-bootstrap';

export class ProfileDetailsFirstRound extends Component {
    render() {
        return (
            <form>
                <Row className="show-grid">
                    <Col xs={12} sm={6} md={6} lg={6}>
                        <h2 className="profiledetails__h2--title">Candidate Info</h2>
                        <FormGroup>
                            <ControlLabel>Candidate's Full Name</ControlLabel>
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
                                        onChange={(e) => this.props.handleChange(e)}
                                        name="jury_round1_01"
                                        value={this.props.jury_round1_01}
                                    >
                                        <option defaultValue="">Select</option>
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
                                        onChange={(e) => this.props.handleChange(e)}
                                        name="jury_round1_02"
                                        value={this.props.jury_round1_02}
                                    >
                                        <option defaultValue="">Select</option>
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
                                onChange={(e) => this.props.handleChange(e)}
                                name="date_round1"
                                value={this.props.date_round1}
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
                                value={this.props.tech_competency_round1 || 'Limited'}
                                name="tech_competency_round1"
                                onChange={(e) => this.props.handleChange(e, 'Limited')}
                            />
                            <span className="checkmark" />
                        </label>
                        <label className="profiledetails__radioGroup--item">Basic
                            <input
                                type="radio"
                                value={this.props.tech_competency_round1 || 'Basic'}
                                name="tech_competency_round1"
                                onChange={(e) => this.props.handleChange(e, 'Basic')}
                            />
                            <span className="checkmark" />
                        </label>
                        <label className="profiledetails__radioGroup--item">Acceptable
                            <input
                                type="radio"
                                value={this.props.tech_competency_round1 || 'Acceptable'}
                                name="tech_competency_round1"
                                onChange={(e) => this.props.handleChange(e, 'Acceptable')}
                            />
                            <span className="checkmark" />
                        </label>
                        <label className="profiledetails__radioGroup--item">Advanced
                            <input
                                type="radio"
                                value={this.props.tech_competency_round1 || 'Advanced'}
                                onChange={(e) => this.props.handleChange(e, 'Advanced')}
                                name="tech_competency_round1"
                            />
                            <span className="checkmark" />
                        </label>
                        <label className="profiledetails__radioGroup--item">Exceptional
                            <input
                                type="radio"
                                value={this.props.tech_competency_round1 || 'Exceptional'}
                                onChange={(e) => this.props.handleChange(e, 'Exceptional')}
                                name="tech_competency_round1"
                            />
                            <span className="checkmark" />
                        </label>
                    </div>

                    <FormGroup>
                        <span className="profiledetails__comments">Comment:</span>
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
                    <div className="profiledetails__radioGroup">
                        <label className="profiledetails__radioGroup--item">Limited
                            <input
                                type="radio"
                                value={this.props.cultural_fit_round1 || 'Limited'}
                                name="cultural_fit_round1"
                                onChange={(e) => this.props.handleChange(e, 'Limited')}
                            />
                            <span className="checkmark" />
                        </label>
                        <label className="profiledetails__radioGroup--item">Basic
                            <input
                                type="radio"
                                value={this.props.cultural_fit_round1 || 'Basic'}
                                name="cultural_fit_round1"
                                onChange={(e) => this.props.handleChange(e, 'Basic')}
                            />
                            <span className="checkmark" />
                        </label>
                        <label className="profiledetails__radioGroup--item">Acceptable
                            <input
                                type="radio"
                                value={this.props.cultural_fit_round1 || 'Acceptable'}
                                name="cultural_fit_round1"
                                onChange={(e) => this.props.handleChange(e, 'Acceptable')}
                            />
                            <span className="checkmark" />
                        </label>
                        <label className="profiledetails__radioGroup--item">Advanced
                            <input
                                type="radio"
                                value={this.props.cultural_fit_round1 || 'Advanced'}
                                name="cultural_fit_round1"
                                onChange={(e) => this.props.handleChange(e, 'Advanced')}
                            />
                            <span className="checkmark" />
                        </label>
                        <label className="profiledetails__radioGroup--item">Exceptional
                            <input
                                type="radio"
                                value={this.props.cultural_fit_round1 || 'Exceptional'}
                                name="cultural_fit_round1"
                                onChange={(e) => this.props.handleChange(e, 'Exceptional')}
                            />
                            <span className="checkmark" />
                        </label>
                    </div>

                    <FormGroup>
                        <span className="profiledetails__comments">Comment:</span>
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
                                type="text"
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
                                className="profiledetails__select"
                                name="title_round1"
                                value={this.props.title_round1}
                                onChange={(e) => this.props.handleChange(e)}
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
                                name="round1_status"
                                value={this.props.round1_status}
                                onChange={(e) => this.props.handleChange(e)}
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
                        name="cmt_result_round1"
                        value={this.props.cmt_result_round1}
                        onChange={(e) => this.props.handleChange(e)}
                    />
                </FormGroup>
            </form>
        );
    }
}

export default ProfileDetailsFirstRound;