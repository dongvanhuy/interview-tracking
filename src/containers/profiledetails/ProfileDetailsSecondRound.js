import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Grid, Row, Col } from 'react-bootstrap';

export class SecondRound extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "date": "",
            "Secondtechcompetency": {
                "level": "",
                "comment": ""
            },
            "SecondcuturalFit": {
                "level": "",
                "comment": ""
            },
            "interviewerName": "",

            "businessAcument": {
                "level": "",
                "comment": ""
            },
            "softSkills": {
                "level": "",
                "comment": ""
            },
            "peopleManagement": {
                "level": "",
                "comment": ""
            },
            "Secondresult": {
                "YPE": "",
                "title": "",
                "status": "",
                "comment": ""
            }
        }
    };

    handleChange = (e, childatrr) => {
        var value = e.target.value;
        var name = e.target.name;
        var state = this.state;
        if (childatrr === "" || childatrr === undefined) {
            state[name] = value;
        }
        else {
            state[name][childatrr] = value;
        }
        this.setState({ state: this.state });
        // console.log(this.state);
    }

    render() {
        return (
            <Grid>
                <h2 className="profiledetails__h2--title">2st Round</h2>
                <Row className="show-grid">
                    <Col xs={12} sm={4} md={4} lg={4}>
                        <ControlLabel>Interviewer(s)'s name</ControlLabel>
                        <FormGroup>
                            <FormControl componentClass="select" placeholder="select"
                                className="profiledetails__select"
                                onChange={(e) => this.handleChange(e)}
                                name="interviewerName"
                            >
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
                                name="date"
                                type="date"
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <ControlLabel>Technical Competency</ControlLabel>
                    <div className="profiledetails__radioGroup">
                        <label className="profiledetails__radioGroup--item">Limited
                                    <input type="radio" value="Limited" name="Secondtechcompetency"
                                onChange={(e) => this.handleChange(e, "level")} />
                            <span className="checkmark"></span>
                        </label>
                        <label className="profiledetails__radioGroup--item">Basic
                                    <input type="radio" value="Basic" name="Secondtechcompetency"
                                onChange={(e) => this.handleChange(e, "level")} />
                            <span className="checkmark"></span>
                        </label>
                        <label className="profiledetails__radioGroup--item">Acceptable
                                    <input type="radio" value="Acceptable" name="Secondtechcompetency"
                                onChange={(e) => this.handleChange(e, "level")} />
                            <span className="checkmark"></span>
                        </label>
                        <label className="profiledetails__radioGroup--item">Advanced
                                    <input type="radio" value="Advanced" name="Secondtechcompetency"
                                onChange={(e) => this.handleChange(e, "level")} />
                            <span className="checkmark"></span>
                        </label>
                        <label className="profiledetails__radioGroup--item">Exceptional
                                    <input type="radio" value="Exceptional" name="Secondtechcompetency"
                                onChange={(e) => this.handleChange(e, "level")} />
                            <span className="checkmark"></span>
                        </label>
                    </div>

                    <FormGroup>
                        <span className="profiledetails__comments">Comment</span>
                        <FormControl componentClass="textarea"
                            name="Secondtechcompetency"
                            onChange={(e) => (this.handleChange(e, "comment"))}
                        />
                    </FormGroup>
                </FormGroup>

                <FormGroup>
                    <ControlLabel>Cutural Fit</ControlLabel>
                    <div className="profiledetails__radioGroup">
                        <label className="profiledetails__radioGroup--item">Limited
                                    <input type="radio" value="Limited" name="SecondcuturalFit"
                                onChange={(e) => this.handleChange(e, "level")} />
                            <span className="checkmark"></span>
                        </label>
                        <label className="profiledetails__radioGroup--item">Basic
                                    <input type="radio" value="Basic" name="SecondcuturalFit"
                                onChange={(e) => this.handleChange(e, "level")} />
                            <span className="checkmark"></span>
                        </label>
                        <label className="profiledetails__radioGroup--item">Acceptable
                                    <input type="radio" value="Acceptable" name="SecondcuturalFit"
                                onChange={(e) => this.handleChange(e, "level")} />
                            <span className="checkmark"></span>
                        </label>
                        <label className="profiledetails__radioGroup--item">Advanced
                                    <input type="radio" value="Advanced" name="SecondcuturalFit"
                                onChange={(e) => this.handleChange(e, "level")} />
                            <span className="checkmark"></span>
                        </label>
                        <label className="profiledetails__radioGroup--item">Exceptional
                                    <input type="radio" value="Exceptional" name="SecondcuturalFit"
                                onChange={(e) => this.handleChange(e, "level")} />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <FormGroup>
                        <span className="profiledetails__comments">Comment</span>
                        <FormControl componentClass="textarea"
                            name="SecondcuturalFit"
                            onChange={(e) => (this.handleChange(e, "comment"))}
                        />
                    </FormGroup>
                </FormGroup>

                <FormGroup>
                    <ControlLabel>Bussiness Acument</ControlLabel>
                    <div className="profiledetails__radioGroup">
                        <label className="profiledetails__radioGroup--item">Limited
                                    <input type="radio" value="Limited" name="businessAcument"
                                onChange={(e) => this.handleChange(e, "level")} />
                            <span className="checkmark"></span>
                        </label>
                        <label className="profiledetails__radioGroup--item">Basic
                                    <input type="radio" value="Basic" name="businessAcument"
                                onChange={(e) => this.handleChange(e, "level")} />
                            <span className="checkmark"></span>
                        </label>
                        <label className="profiledetails__radioGroup--item">Acceptable
                                    <input type="radio" value="Acceptable" name="businessAcument"
                                onChange={(e) => this.handleChange(e, "level")} />
                            <span className="checkmark"></span>
                        </label>
                        <label className="profiledetails__radioGroup--item">Advanced
                                    <input type="radio" value="Advanced" name="businessAcument"
                                onChange={(e) => this.handleChange(e, "level")} />
                            <span className="checkmark"></span>
                        </label>
                        <label className="profiledetails__radioGroup--item">Exceptional
                                    <input type="radio" value="Exceptional" name="businessAcument"
                                onChange={(e) => this.handleChange(e, "level")} />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <FormGroup>
                        <span className="profiledetails__comments">Comment</span>
                        <FormControl componentClass="textarea"
                            name="businessAcument"
                            onChange={(e) => (this.handleChange(e, "comment"))}
                        />
                    </FormGroup>
                </FormGroup>

                <FormGroup>
                    <ControlLabel>Soft skills</ControlLabel>
                    <div className="profiledetails__radioGroup">
                        <label className="profiledetails__radioGroup--item">Limited
                                    <input type="radio" value="Limited" name="softSkills"
                                onChange={(e) => this.handleChange(e, "level")} />
                            <span className="checkmark"></span>
                        </label>
                        <label className="profiledetails__radioGroup--item">Basic
                                    <input type="radio" value="Basic" name="softSkills"
                                onChange={(e) => this.handleChange(e, "level")} />
                            <span className="checkmark"></span>
                        </label>
                        <label className="profiledetails__radioGroup--item">Acceptable
                                    <input type="radio" value="Acceptable" name="softSkills"
                                onChange={(e) => this.handleChange(e, "level")} />
                            <span className="checkmark"></span>
                        </label>
                        <label className="profiledetails__radioGroup--item">Advanced
                                    <input type="radio" value="Advanced" name="softSkills"
                                onChange={(e) => this.handleChange(e, "level")} />
                            <span className="checkmark"></span>
                        </label>
                        <label className="profiledetails__radioGroup--item">Exceptional
                                    <input type="radio" value="Exceptional" name="softSkills"
                                onChange={(e) => this.handleChange(e, "level")} />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <FormGroup>
                        <span className="profiledetails__comments">Comment</span>
                        <FormControl componentClass="textarea"
                            name="softSkills"
                            onChange={(e) => (this.handleChange(e, "comment"))}
                        />
                    </FormGroup>
                </FormGroup>

                <FormGroup>
                    <ControlLabel>People Management</ControlLabel>
                    <div className="profiledetails__radioGroup">
                        <label className="profiledetails__radioGroup--item">Limited
                                    <input type="radio" value="Limited" name="peopleManagement"
                                onChange={(e) => this.handleChange(e, "level")} />
                            <span className="checkmark"></span>
                        </label>
                        <label className="profiledetails__radioGroup--item">Basic
                                    <input type="radio" value="Basic" name="peopleManagement"
                                onChange={(e) => this.handleChange(e, "level")} />
                            <span className="checkmark"></span>
                        </label>
                        <label className="profiledetails__radioGroup--item">Acceptable
                                    <input type="radio" value="Acceptable" name="peopleManagement"
                                onChange={(e) => this.handleChange(e, "level")} />
                            <span className="checkmark"></span>
                        </label>
                        <label className="profiledetails__radioGroup--item">Advanced
                                    <input type="radio" value="Advanced" name="peopleManagement"
                                onChange={(e) => this.handleChange(e, "level")} />
                            <span className="checkmark"></span>
                        </label>
                        <label className="profiledetails__radioGroup--item">Exceptional
                                    <input type="radio" value="Exceptional" name="peopleManagement"
                                onChange={(e) => this.handleChange(e, "level")} />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <FormGroup>
                        <span className="profiledetails__comments">Comment</span>
                        <FormControl componentClass="textarea"
                            name="peopleManagement"
                            onChange={(e) => (this.handleChange(e, "comment"))}
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
                                name="Secondresult"
                                onChange={(e) => (this.handleChange(e, "YPE"))}
                            />
                        </FormGroup>
                    </Col>
                    <Col xs={12} sm={4} md={4} lg={4}>
                        <FormGroup>
                            <ControlLabel>Title</ControlLabel>
                            <FormControl componentClass="select" placeholder="select"
                                className="profiledetails__select"
                                name="Secondresult"
                                onChange={(e) => (this.handleChange(e, "title"))}>
                                <option defaultValue="Assoc Prof">Assoc Prof</option>
                                <option defaultValue="Prof">Prof</option>
                                <option defaultValue="Snr Prof">Snr Prof</option>
                            </FormControl>
                        </FormGroup>
                    </Col>
                    <Col xs={12} sm={4} md={4} lg={4}>
                        <FormGroup>
                            <ControlLabel>2st Round Status</ControlLabel>
                            <FormControl componentClass="select" placeholder="select"
                                className="profiledetails__select"
                                name="Secondresult"
                                onChange={(e) => (this.handleChange(e, "status"))}>>
                                        <option defaultValue="Passed">Passed</option>
                                <option defaultValue="KIV">KIV</option>
                                <option defaultValue="Fail">Fail</option>
                            </FormControl>
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <span className="profiledetails__comments">Comment</span>
                    <FormControl componentClass="textarea"
                        name="Secondresult"
                        onChange={(e) => (this.handleChange(e, "comment"))}
                    />
                </FormGroup>
            </Grid>
        );
    }
}

export default SecondRound;