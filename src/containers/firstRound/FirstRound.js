import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Button, Grid, Row, Col, Radio, PageHeader } from 'react-bootstrap';

export class FirstRound extends Component {

    constructor(props) {
        super(props);
        this.state = {
            "candidateName": "",
            "position": "",
            "recruiter": "",

            "hrInterview": {
                "englishlevel": "",
                "note": ""
            },
            "interviewersName": {
                "interviewer1": "",
                "interviewer2": ""
            },
            "date": "",
            "techcompetency": {
                "level": "",
                "comment": ""
            },
            "cuturalFit": {
                "level": "",
                "comment": ""
            },
            "result": {
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
        console.log(this.state);
    }

    render() {
        return (
            <section className="firstRound">
                <PageHeader className="form--title">
                    Candidate Assessment Summary Form
                </PageHeader>
                <Grid>
                    <form action="">
                        <Row className="show-grid">
                            <Col xs={12} sm={6} md={6} lg={6}>
                                <h2 className="form__h2--title">Candidate Info</h2>
                                <FormGroup>
                                    <ControlLabel>Candidate's Full Name</ControlLabel>
                                    <FormControl
                                        type="text"
                                        placeholder=""
                                        name="candidateName"
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
                                    <FormControl componentClass="select" className="form--select"
                                        onChange={(e) => this.handleChange(e)}
                                        name="recruiter"
                                        placeholder="Select"
                                    >
                                        <option value="Duyen Tran">Duyen Tran</option>
                                        <option value="other">Vy Phan</option>
                                        <option value="other1">Nhu Huynh</option>
                                    </FormControl>
                                </FormGroup>
                            </Col>
                            <Col xs={12} sm={6} md={6} lg={6}>
                                <h2 className="form__h2--title">HR Interview</h2>
                                <FormGroup>
                                    <ControlLabel>English Level</ControlLabel>
                                    <FormControl
                                        type="text"
                                        placeholder=""
                                        name="hrInterview"
                                        onChange={(e) => this.handleChange(e, "englishlevel")}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <ControlLabel>Note</ControlLabel>
                                    <FormControl componentClass="textarea"
                                        name="hrInterview"
                                        onChange={(e) => this.handleChange(e, "note")}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <h2 className="form__h2--title">1st Round</h2>
                        <Row className="show-grid">
                            <Col xs={12} sm={9} md={9} lg={9}>
                                <ControlLabel>Interviewer(s)'s name</ControlLabel>
                                <Row className="show-grid">
                                    <Col xs={12} sm={6} md={6} lg={6}>
                                        <FormGroup>
                                            <FormControl componentClass="select" placeholder="select"
                                                onChange={(e) => this.handleChange(e, "interviewer1")}
                                                name="interviewersName"
                                            >
                                                <option defaultValue="Huy Dong">Huy Dong</option>
                                                <option defaultValue="Huy Chung">Huy Chung</option>
                                                <option defaultValue="Trang Nguyen">Trang Nguyen</option>
                                            </FormControl>
                                        </FormGroup>

                                    </Col>
                                    <Col xs={12} sm={6} md={6} lg={6}>
                                        <FormGroup>
                                            <FormControl componentClass="select" placeholder="select"
                                                onChange={(e) => this.handleChange(e, "interviewer2")}
                                                name="interviewersName"
                                            >
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
                                        name="date"
                                        type="date"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>


                        <FormGroup>
                            <ControlLabel>Technical Competency</ControlLabel>
                            <div className="radioGroup">
                                <Radio onChange={(e) => this.handleChange(e, "level")} className="radio" value="Limited" name="techcompetency" >Limited</Radio>
                                <Radio onChange={(e) => this.handleChange(e, "level")} className="radio" value="Basic" name="techcompetency" >Basic</Radio>
                                <Radio onChange={(e) => this.handleChange(e, "level")} className="radio" value="Acceptable" name="techcompetency" >Acceptable</Radio>
                                <Radio onChange={(e) => this.handleChange(e, "level")} className="radio" value="Advanced" name="techcompetency" >Advanced</Radio>
                                <Radio onChange={(e) => this.handleChange(e, "level")} className="radio" value="Exceptional" name="techcompetency" >Exceptional</Radio>

                            </div>

                            <FormGroup>
                                <ControlLabel>Comment</ControlLabel>
                                <FormControl componentClass="textarea"
                                    name="techcompetency"
                                    onChange={(e) => (this.handleChange(e, "comment"))}
                                />
                            </FormGroup>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Cutural Fit</ControlLabel>
                            <div className="radioGroup">
                                <Radio onChange={(e) => this.handleChange(e, "level")} className="radio" value="Limited" name="cuturalFit" >Limited</Radio>
                                <Radio onChange={(e) => this.handleChange(e, "level")} className="radio" value="Basic" name="cuturalFit" >Basic</Radio>
                                <Radio onChange={(e) => this.handleChange(e, "level")} className="radio" value="Acceptable" name="cuturalFit" >Acceptable</Radio>
                                <Radio onChange={(e) => this.handleChange(e, "level")} className="radio" value="Advanced" name="cuturalFit" >Advanced</Radio>
                                <Radio onChange={(e) => this.handleChange(e, "level")} className="radio" value="Exceptional" name="cuturalFit" >Exceptional</Radio>
                            </div>

                            <FormGroup>
                                <ControlLabel>Comment</ControlLabel>
                                <FormControl componentClass="textarea"
                                    name="cuturalFit"
                                    onChange={(e) => (this.handleChange(e, "comment"))}
                                />
                            </FormGroup>
                        </FormGroup>
                        <h4>Result</h4>
                        <Row>
                            <Col xs={12} sm={4} md={4} lg={4}>
                                <FormGroup>
                                    <ControlLabel>YPE</ControlLabel>
                                    <FormControl
                                        type="text"
                                        placeholder=""
                                        name="result"
                                        onChange={(e) => (this.handleChange(e, "YPE"))}
                                    />
                                </FormGroup>
                            </Col>
                            <Col xs={12} sm={4} md={4} lg={4}>
                                <FormGroup>
                                    <ControlLabel>Title</ControlLabel>
                                    <FormControl componentClass="select" placeholder="select"
                                        name="result"
                                        onChange={(e) => (this.handleChange(e, "title"))}>
                                        <option defaultValue="Assoc Prof">Assoc Prof</option>
                                        <option defaultValue="Prof">Prof</option>
                                        <option defaultValue="Snr Prof">Snr Prof</option>
                                    </FormControl>
                                </FormGroup>
                            </Col>
                            <Col xs={12} sm={4} md={4} lg={4}>
                                <FormGroup>
                                    <ControlLabel>1st Round Status</ControlLabel>
                                    <FormControl componentClass="select" placeholder="select"
                                        name="result"
                                        onChange={(e) => (this.handleChange(e, "status"))}>>
                                        <option defaultValue="Passed">Passed</option>
                                        <option defaultValue="KIV">KIV</option>
                                        <option defaultValue="Fail">Fail</option>
                                    </FormControl>
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup>
                            <ControlLabel>Comment</ControlLabel>
                            <FormControl componentClass="textarea"
                                name="result"
                                onChange={(e) => (this.handleChange(e, "comment"))}
                            />
                        </FormGroup>
                        <Button type="submit">Submit</Button>
                    </form>
                </Grid>
            </section >
        );
    }
}