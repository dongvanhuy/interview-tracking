import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Row, Col } from 'react-bootstrap';

export class ProfileDetailsSecondRound extends Component {
    render() {
        return (
            <form>
                <h2 className="profiledetails__h2--title">2st Round</h2>
                <Row className="show-grid">
                    <Col xs={12} sm={4} md={4} lg={4}>
                        <ControlLabel>Interviewer(s)'s name</ControlLabel>
                        <FormGroup>
                            <FormControl
                                componentClass="select"
                                placeholder="select"
                                className="profiledetails__select"
                                onChange={(e) => this.props.handleChange(e)}
                                name="jury_round2"
                                value={this.props.jury_round2}
                            >
                                <option defaultValue="">Select</option>
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
                                onChange={(e) => this.props.handleChange(e)}
                                name="date_round2"
                                type="date"
                                value={this.props.date_round2}
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
                                name="tech_competency_round2"
                                value={this.props.tech_competency_round2 || 'Limited'}
                                onChange={(e) => this.props.handleChange(e, 'Limited')}
                            />
                            <span className="checkmark" />
                        </label>
                        <label className="profiledetails__radioGroup--item">Basic
                            <input
                                type="radio"
                                name="tech_competency_round2"
                                value={this.props.tech_competency_round2 || 'Basic'}
                                onChange={(e) => this.props.handleChange(e, 'Basic')}
                            />
                            <span className="checkmark" />
                        </label>
                        <label className="profiledetails__radioGroup--item">Acceptable
                            <input
                                type="radio"
                                name="tech_competency_round2"
                                value={this.props.tech_competency_round2 || 'Acceptable'}
                                onChange={(e) => this.props.handleChange(e, 'Acceptable')}
                            />
                            <span className="checkmark" />
                        </label>
                        <label className="profiledetails__radioGroup--item">Advanced
                            <input
                                type="radio"
                                name="tech_competency_round2"
                                value={this.props.tech_competency_round2 || 'Advanced'}
                                onChange={(e) => this.props.handleChange(e, 'Advanced')}
                            />
                            <span className="checkmark" />
                        </label>
                        <label className="profiledetails__radioGroup--item">Exceptional
                            <input
                                type="radio"
                                name="tech_competency_round2"
                                value={this.props.tech_competency_round2 || 'Exceptional'}
                                onChange={(e) => this.props.handleChange(e, 'Exceptional')}
                            />
                            <span className="checkmark" />
                        </label>
                    </div>

                    <FormGroup>
                        <span className="profiledetails__comments">Comment:</span>
                        <FormControl
                            componentClass="textarea"
                            name="tech_competency_round2_cmt"
                            onChange={(e) => this.props.handleChange(e)}
                            value={this.props.tech_competency_round2_cmt}
                        />
                    </FormGroup>
                </FormGroup>

                <FormGroup>
                    <ControlLabel>Cutural Fit</ControlLabel>
                    <div className="profiledetails__radioGroup">
                        <label className="profiledetails__radioGroup--item">Limited
                            <input
                                type="radio"
                                value={this.props.cultural_fit_round2 || 'Limited'}
                                name="cultural_fit_round2"
                                onChange={(e) => this.props.handleChange(e, 'Limited')}
                            />
                            <span className="checkmark" />
                        </label>
                        <label className="profiledetails__radioGroup--item">Basic
                            <input
                                type="radio"
                                value={this.props.cultural_fit_round2 || 'Basic'}
                                name="cultural_fit_round2"
                                onChange={(e) => this.props.handleChange(e, 'Basic')}
                            />
                            <span className="checkmark" />
                        </label>
                        <label className="profiledetails__radioGroup--item">Acceptable
                            <input
                                type="radio"
                                value={this.props.cultural_fit_round2 || 'Acceptable'}
                                name="cultural_fit_round2"
                                onChange={(e) => this.props.handleChange(e, 'Acceptable')}
                            />
                            <span className="checkmark" />
                        </label>
                        <label className="profiledetails__radioGroup--item">Advanced
                            <input
                                type="radio"
                                value={this.props.cultural_fit_round2 || 'Advanced'}
                                name="cultural_fit_round2"
                                onChange={(e) => this.props.handleChange(e, 'Advanced')}
                            />
                            <span className="checkmark" />
                        </label>
                        <label className="profiledetails__radioGroup--item">Exceptional
                            <input
                                type="radio"
                                value={this.props.cultural_fit_round2 || 'Exceptional'}
                                name="cultural_fit_round2"
                                onChange={(e) => this.props.handleChange(e, 'Exceptional')}
                            />
                            <span className="checkmark" />
                        </label>
                    </div>
                    <FormGroup>
                        <span className="profiledetails__comments">Comment:</span>
                        <FormControl
                            componentClass="textarea"
                            name="cultural_fit_round2_cmt"
                            onChange={(e) => this.props.handleChange(e)}
                            value={this.props.cultural_fit_round2_cmt}
                        />
                    </FormGroup>
                </FormGroup>

                <FormGroup>
                    <ControlLabel>Bussiness Acument</ControlLabel>
                    <div className="profiledetails__radioGroup">
                        <label className="profiledetails__radioGroup--item">Limited
                            <input
                                type="radio"
                                value={this.props.business_acument || 'Limited'}
                                name="business_acument"
                                onChange={(e) => this.props.handleChange(e, 'Limited')}
                            />
                            <span className="checkmark" />
                        </label>
                        <label className="profiledetails__radioGroup--item">Basic
                            <input
                                type="radio"
                                value={this.props.business_acument || 'Basic'}
                                name="business_acument"
                                onChange={(e) => this.props.handleChange(e, 'Basic')}
                            />
                            <span className="checkmark" />
                        </label>
                        <label className="profiledetails__radioGroup--item">Acceptable
                            <input
                                type="radio"
                                value={this.props.business_acument || 'Acceptable'}
                                name="business_acument"
                                onChange={(e) => this.props.handleChange(e, 'Acceptable')}
                            />
                            <span className="checkmark" />
                        </label>
                        <label className="profiledetails__radioGroup--item">Advanced
                            <input
                                type="radio"
                                value={this.props.business_acument || 'Advanced'}
                                name="business_acument"
                                onChange={(e) => this.props.handleChange(e, 'Advanced')}
                            />
                            <span className="checkmark" />
                        </label>
                        <label className="profiledetails__radioGroup--item">Exceptional
                            <input
                                type="radio"
                                value={this.props.business_acument || 'Exceptional'}
                                name="business_acument"
                                onChange={(e) => this.props.handleChange(e, 'Exceptional')}
                            />
                            <span className="checkmark" />
                        </label>
                    </div>
                    <FormGroup>
                        <span className="profiledetails__comments">Comment:</span>
                        <FormControl
                            componentClass="textarea"
                            name="business_acument_cmt"
                            onChange={(e) => this.props.handleChange(e)}
                            value={this.props.business_acument_cmt}
                        />
                    </FormGroup>
                </FormGroup>

                <FormGroup>
                    <ControlLabel>Soft skills</ControlLabel>
                    <div className="profiledetails__radioGroup">
                        <label className="profiledetails__radioGroup--item">Limited
                            <input
                                type="radio"
                                value={this.props.soft_skill || 'Limited'}
                                name="soft_skill"
                                onChange={(e) => this.props.handleChange(e, 'Limited')}
                            />
                            <span className="checkmark" />
                        </label>
                        <label className="profiledetails__radioGroup--item">Basic
                            <input
                                type="radio"
                                value={this.props.soft_skill || 'Basic'}
                                name="soft_skill"
                                onChange={(e) => this.props.handleChange(e, 'Basic')}
                            />
                            <span className="checkmark" />
                        </label>
                        <label className="profiledetails__radioGroup--item">Acceptable
                            <input
                                type="radio"
                                value={this.props.soft_skill || 'Acceptable'}
                                name="soft_skill"
                                onChange={(e) => this.props.handleChange(e, 'Acceptable')}
                            />
                            <span className="checkmark" />
                        </label>
                        <label className="profiledetails__radioGroup--item">Advanced
                            <input
                                type="radio"
                                value={this.props.soft_skill || 'Advanced'}
                                name="soft_skill"
                                onChange={(e) => this.props.handleChange(e, 'Advanced')}
                            />
                            <span className="checkmark" />
                        </label>
                        <label className="profiledetails__radioGroup--item">Exceptional
                            <input
                                type="radio"
                                value={this.props.soft_skill || 'Exceptional'}
                                name="soft_skill"
                                onChange={(e) => this.props.handleChange(e, 'Exceptional')}
                            />
                            <span className="checkmark" />
                        </label>
                    </div>
                    <FormGroup>
                        <span className="profiledetails__comments">Comment:</span>
                        <FormControl
                            componentClass="textarea"
                            name="soft_skill_cmt"
                            onChange={(e) => this.props.handleChange(e)}
                            value={this.props.soft_skill_cmt}
                        />
                    </FormGroup>
                </FormGroup>

                <FormGroup>
                    <ControlLabel>People Management</ControlLabel>
                    <div className="profiledetails__radioGroup">
                        <label className="profiledetails__radioGroup--item">Limited
                            <input
                                type="radio"
                                value={this.props.people_management || 'Limited'}
                                name="people_management"
                                onChange={(e) => this.props.handleChange(e, 'Limited')}
                            />
                            <span className="checkmark" />
                        </label>
                        <label className="profiledetails__radioGroup--item">Basic
                            <input
                                type="radio"
                                value={this.props.people_management || 'Basic'}
                                name="people_management"
                                onChange={(e) => this.props.handleChange(e, 'Basic')}
                            />
                            <span className="checkmark" />
                        </label>
                        <label className="profiledetails__radioGroup--item">Acceptable
                            <input
                                type="radio"
                                value={this.props.people_management || 'Acceptable'}
                                name="people_management"
                                onChange={(e) => this.props.handleChange(e, 'Acceptable')}
                            />
                            <span className="checkmark" />
                        </label>
                        <label className="profiledetails__radioGroup--item">Advanced
                            <input
                                type="radio"
                                value={this.props.people_management || 'Advanced'}
                                name="people_management"
                                onChange={(e) => this.props.handleChange(e, 'Advanced')}
                            />
                            <span className="checkmark" />
                        </label>
                        <label className="profiledetails__radioGroup--item">Exceptional
                            <input
                                type="radio"
                                value={this.props.people_management || 'Exceptional'}
                                name="people_management"
                                onChange={(e) => this.props.handleChange(e, 'Exceptional')}
                            />
                            <span className="checkmark" />
                        </label>
                    </div>
                    <FormGroup>
                        <span className="profiledetails__comments">Comment:</span>
                        <FormControl
                            componentClass="textarea"
                            name="people_management_cmt"
                            onChange={(e) => this.props.handleChange(e)}
                            value={this.props.people_management_cmt}
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
                                name="ype_round2"
                                onChange={(e) => this.props.handleChange(e)}
                                value={this.props.ype_round2}
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
                                name="title_round2"
                                onChange={(e) => this.props.handleChange(e)}
                                value={this.props.title_round2}
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
                                name="round2_status"
                                value={this.props.round2_status}
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
                        name="cmt_result_round2"
                        onChange={(e) => this.props.handleChange(e)}
                        value={this.props.cmt_result_round2}
                    />
                </FormGroup>
            </form>
        );
    }
}

export default ProfileDetailsSecondRound;
