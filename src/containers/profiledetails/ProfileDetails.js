import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Grid, Row, Col } from 'react-bootstrap';
import { SecondRound } from './ProfileDetailsSecondRound';
import { connect } from 'react-redux';
import PropsTypes from 'prop-types';
import { loadProfile1 } from './ProfileDetailsAction';

export class FirstRound extends Component {
    static propsTypes = {
        profileDetails: PropsTypes.arrayOf(PropsTypes.object),
    }

    static defaultProps = {
        profileDetails: [],
    }

    componentWillMount() {
        this.props.loadProfile1();
    }
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         "candidateName": "",
    //         "position": "",
    //         "recruiter": "",

    //         "hrInterview": {
    //             "englishlevel": "",
    //             "note": ""
    //         },
    //         "interviewersName": {
    //             "interviewer1": "",
    //             "interviewer2": ""
    //         },
    //         "date": "",
    //         "techcompetency": {
    //             "level": "",
    //             "comment": ""
    //         },
    //         "cuturalFit": {
    //             "level": "",
    //             "comment": ""
    //         },
    //         "result": {
    //             "YPE": "",
    //             "title": "",
    //             "status": "",
    //             "comment": ""
    //         }
    //     }
    // };
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
    check = () => {
        alert(this.props.profileDetails);
    }
    render() {
        return (
            // this.props.profileDetails.map((item) => <div>name: {item.name}</div>)
            <button onClick={this.check}>check</button>
        );
        // return (
        //     <section className="profiledetails">
        //         this.props.profile.map((item) => <div>name: {item.name}</div>)
        //         <h1 className="profiledetails--title">
        //             Candidate Assessment Summary Form
        //         </h1>
        //         <Grid>
        //             <form action="">
        //                 <Row className="show-grid">
        //                     <Col xs={12} sm={6} md={6} lg={6}>
        //                         <h2 className="profiledetails__h2--title">Candidate Info</h2>
        //                         <FormGroup>
        //                             <ControlLabel>Candidate's Full Name</ControlLabel>
        //                             <FormControl
        //                                 required
        //                                 type="text"
        //                                 placeholder=""
        //                                 name="candidateName"
        //                                 onChange={(e) => this.handleChange(e)}
        //                             />
        //                         </FormGroup>
        //                         <FormGroup>
        //                             <ControlLabel>Position Interview</ControlLabel>
        //                             <FormControl
        //                                 type="text"
        //                                 placeholder=""
        //                                 name="position"
        //                                 onChange={(e) => this.handleChange(e)}
        //                             />
        //                         </FormGroup>
        //                         <FormGroup>
        //                             <ControlLabel>Recruiter</ControlLabel>
        //                             <FormControl componentClass="select" className="profiledetails__select"
        //                                 onChange={(e) => this.handleChange(e)}
        //                                 name="recruiter"
        //                                 placeholder="Select"
        //                             >
        //                                 <option value="Duyen Tran">Duyen Tran</option>
        //                                 <option value="other">Vy Phan</option>
        //                                 <option value="other1">Nhu Huynh</option>
        //                             </FormControl>
        //                         </FormGroup>
        //                     </Col>
        //                     <Col xs={12} sm={6} md={6} lg={6}>
        //                         <h2 className="profiledetails__h2--title">HR Interview</h2>
        //                         <FormGroup>
        //                             <ControlLabel>English Level</ControlLabel>
        //                             <FormControl
        //                                 type="text"
        //                                 placeholder=""
        //                                 name="hrInterview"
        //                                 onChange={(e) => this.handleChange(e, "englishlevel")}
        //                             />
        //                         </FormGroup>
        //                         <FormGroup>
        //                             <ControlLabel>Note</ControlLabel>
        //                             <FormControl componentClass="textarea"
        //                                 name="hrInterview"
        //                                 onChange={(e) => this.handleChange(e, "note")}
        //                             />
        //                         </FormGroup>
        //                     </Col>
        //                 </Row>
        //                 <h2 className="profiledetails__h2--title">1st Round</h2>
        //                 <Row className="show-grid">
        //                     <Col xs={12} sm={9} md={9} lg={9}>
        //                         <ControlLabel>Interviewer(s)'s name</ControlLabel>
        //                         <Row className="show-grid">
        //                             <Col xs={12} sm={6} md={6} lg={6}>
        //                                 <FormGroup>
        //                                     <FormControl componentClass="select" placeholder="select"
        //                                         className="profiledetails__select"
        //                                         onChange={(e) => this.handleChange(e, "interviewer1")}
        //                                         name="interviewersName"
        //                                     >
        //                                         <option defaultValue="Huy Dong">Huy Dong</option>
        //                                         <option defaultValue="Huy Chung">Huy Chung</option>
        //                                         <option defaultValue="Trang Nguyen">Trang Nguyen</option>
        //                                     </FormControl>
        //                                 </FormGroup>

        //                             </Col>
        //                             <Col xs={12} sm={6} md={6} lg={6}>
        //                                 <FormGroup>
        //                                     <FormControl componentClass="select" placeholder="select"
        //                                         className="profiledetails__select"
        //                                         onChange={(e) => this.handleChange(e, "interviewer2")}
        //                                         name="interviewersName"
        //                                     >
        //                                         <option defaultValue="Huy Dong">Huy Dong</option>
        //                                         <option defaultValue="Huy Chung">Huy Chung</option>
        //                                         <option defaultValue="Trang Nguyen">Trang Nguyen</option>
        //                                     </FormControl>
        //                                 </FormGroup>

        //                             </Col>
        //                         </Row>
        //                     </Col>
        //                     <Col xs={12} sm={3} md={3} lg={3}>
        //                         <FormGroup>
        //                             <ControlLabel>Date</ControlLabel>

        //                             <FormControl
        //                                 onChange={(e) => this.handleChange(e)}
        //                                 name="date"
        //                                 type="date"
        //                             />
        //                         </FormGroup>
        //                     </Col>
        //                 </Row>
        //                 <FormGroup>
        //                     <ControlLabel>Technical Competency</ControlLabel>
        //                     <div className="profiledetails__radioGroup">
        //                         <label className="profiledetails__radioGroup--item">Limited
        //                             <input type="radio" value="Limited" name="techcompetency"
        //                                 onChange={(e) => this.handleChange(e, "level")} />
        //                             <span className="checkmark"></span>
        //                         </label>
        //                         <label className="profiledetails__radioGroup--item">Basic
        //                             <input type="radio" value="Basic" name="techcompetency"
        //                                 onChange={(e) => this.handleChange(e, "level")} />
        //                             <span className="checkmark"></span>
        //                         </label>
        //                         <label className="profiledetails__radioGroup--item">Acceptable
        //                             <input type="radio" value="Acceptable" name="techcompetency"
        //                                 onChange={(e) => this.handleChange(e, "level")} />
        //                             <span className="checkmark"></span>
        //                         </label>
        //                         <label className="profiledetails__radioGroup--item">Advanced
        //                             <input type="radio" value="Advanced" name="techcompetency"
        //                                 onChange={(e) => this.handleChange(e, "level")} />
        //                             <span className="checkmark"></span>
        //                         </label>
        //                         <label className="profiledetails__radioGroup--item">Exceptional
        //                             <input type="radio" value="Exceptional" name="techcompetency"
        //                                 onChange={(e) => this.handleChange(e, "level")} />
        //                             <span className="checkmark"></span>
        //                         </label>
        //                     </div>

        //                     <FormGroup>
        //                         <span className="profiledetails__comments">Comment</span>
        //                         <FormControl componentClass="textarea"
        //                             name="techcompetency"
        //                             onChange={(e) => (this.handleChange(e, "comment"))}
        //                         />
        //                     </FormGroup>
        //                 </FormGroup>
        //                 <FormGroup>
        //                     <ControlLabel>Cutural Fit</ControlLabel>
        //                     <div className="profiledetails__radioGroup">
        //                         <label className="profiledetails__radioGroup--item">Limited
        //                             <input type="radio" value="Limited" name="cuturalFit"
        //                                 onChange={(e) => this.handleChange(e, "level")} />
        //                             <span className="checkmark"></span>
        //                         </label>
        //                         <label className="profiledetails__radioGroup--item">Basic
        //                             <input type="radio" value="Basic" name="cuturalFit"
        //                                 onChange={(e) => this.handleChange(e, "level")} />
        //                             <span className="checkmark"></span>
        //                         </label>
        //                         <label className="profiledetails__radioGroup--item">Acceptable
        //                             <input type="radio" value="Acceptable" name="cuturalFit"
        //                                 onChange={(e) => this.handleChange(e, "level")} />
        //                             <span className="checkmark"></span>
        //                         </label>
        //                         <label className="profiledetails__radioGroup--item">Advanced
        //                             <input type="radio" value="Advanced" name="cuturalFit"
        //                                 onChange={(e) => this.handleChange(e, "level")} />
        //                             <span className="checkmark"></span>
        //                         </label>
        //                         <label className="profiledetails__radioGroup--item">Exceptional
        //                             <input type="radio" value="Exceptional" name="cuturalFit"
        //                                 onChange={(e) => this.handleChange(e, "level")} />
        //                             <span className="checkmark"></span>
        //                         </label>
        //                     </div>

        //                     <FormGroup>
        //                         <span className="profiledetails__comments">Comment</span>
        //                         <FormControl componentClass="textarea"
        //                             name="cuturalFit"
        //                             onChange={(e) => (this.handleChange(e, "comment"))}
        //                         />
        //                     </FormGroup>
        //                 </FormGroup>
        //                 <h3>Result</h3>
        //                 <Row>
        //                     <Col xs={12} sm={4} md={4} lg={4}>
        //                         <FormGroup>
        //                             <ControlLabel>YPE</ControlLabel>
        //                             <FormControl
        //                                 type="text"
        //                                 placeholder=""
        //                                 name="result"
        //                                 onChange={(e) => (this.handleChange(e, "YPE"))}
        //                             />
        //                         </FormGroup>
        //                     </Col>
        //                     <Col xs={12} sm={4} md={4} lg={4}>
        //                         <FormGroup>
        //                             <ControlLabel>Title</ControlLabel>
        //                             <FormControl componentClass="select" placeholder="select"
        //                                 className="profiledetails__select"
        //                                 name="result"
        //                                 onChange={(e) => (this.handleChange(e, "title"))}>
        //                                 <option defaultValue="Assoc Prof">Assoc Prof</option>
        //                                 <option defaultValue="Prof">Prof</option>
        //                                 <option defaultValue="Snr Prof">Snr Prof</option>
        //                             </FormControl>
        //                         </FormGroup>
        //                     </Col>
        //                     <Col xs={12} sm={4} md={4} lg={4}>
        //                         <FormGroup>
        //                             <ControlLabel>1st Round Status</ControlLabel>
        //                             <FormControl componentClass="select" placeholder="select"
        //                                 className="profiledetails__select"
        //                                 name="result"
        //                                 onChange={(e) => (this.handleChange(e, "status"))}>>
        //                                 <option defaultValue="Passed">Passed</option>
        //                                 <option defaultValue="KIV">KIV</option>
        //                                 <option defaultValue="Fail">Fail</option>
        //                             </FormControl>
        //                         </FormGroup>
        //                     </Col>
        //                 </Row>
        //                 <FormGroup>
        //                     <span className="profiledetails__comments">Comment</span>
        //                     <FormControl componentClass="textarea"
        //                         name="result"
        //                         onChange={(e) => (this.handleChange(e, "comment"))}
        //                     />
        //                 </FormGroup>
        //                 <SecondRound></SecondRound>
        //                 <FormGroup className="profiledetails__btn">
        //                     <Row>
        //                         <Col xs={12} sm={8} md={8} lg={8}>

        //                         </Col>
        //                         <Col xs={12} sm={2} md={2} lg={2}>
        //                             <button className="profiledetails__btn--cancel">CANCEL</button>
        //                         </Col>
        //                         <Col xs={12} sm={2} md={2} lg={2}>
        //                             <button className="profiledetails__btn--submit">SUBMIT</button>
        //                         </Col>

        //                     </Row>
        //                 </FormGroup>
        //             </form>
        //         </Grid>
        //     </section >
        // );
    }
}
const mapStateToProps = state => ({
    profileDetails: state.profileDetails.dataProfileDetails,
});

const mapDispatchToProps = {
    loadProfile1,
};

export default connect(mapStateToProps, mapDispatchToProps)(FirstRound);

{/* export default FirstRound; */ }