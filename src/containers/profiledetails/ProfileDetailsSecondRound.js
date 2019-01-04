import React, { Component } from 'react';
import {
    FormGroup,
    FormControl,
    ControlLabel,
    Row,
    Col,
} from 'react-bootstrap';
import Datetime from 'react-datetime';
import FontAwesomeIcon from 'react-fontawesome';
import moment from 'moment';

export class ProfileDetailsSecondRound extends Component {
    constructor(props) {
        super(props);
        this.dateRound2 = React.createRef();
    }

  state = {
      showTimeRoundTwo: false,
  };

  showTimeTwo = () => {
      const show = this.state.showTimeRoundTwo;
      this.setState({ showTimeRoundTwo: !show });
  };
  render() {
      const yesterday = Datetime.moment().subtract(1, 'day');
      const valid = current =>
          current.isAfter(yesterday) && current.day() !== 0 && current.day() !== 6;
      //   const { users } = this.props;
      return (
          <React.Fragment>
              <h2 className="profile-details__title">2st Round</h2>
              <Row className="show-grid">
                  <Col xs={12} sm={4} md={4} lg={4}>
                      <ControlLabel>Interviewer(s)'s email</ControlLabel>
                      <FormGroup>
                          <FormControl
                              type="text"
                              placeholder="Vui lòng ghi email tại đây ..."
                              className="profile-details__select"
                              onChange={e => this.props.handleChange(e)}
                              name="interviewer_round2"
                              value={this.props.interviewer_round2}
                          />
                      </FormGroup>
                  </Col>
                  <Col xs={12} sm={3} md={3} lg={3}>
                      <FormGroup className="date-time__two">
                          <ControlLabel>Date</ControlLabel>
                          <Datetime
                              inputProps={{
                                  readOnly: true,
                                  placeholder: 'Select date and time',
                              }}
                              // open={this.state.showTimeRoundTwo}
                              value={
                                  this.props.date_round2
                                      ? moment
                                          .utc(this.props.date_round2)
                                          .format('DD-MM-YYYY')
                                      : ''
                              }
                              dateFormat="DD-MM-YYYY"
                              timeFormat="HH:mm"
                              ref={this.dateRound2}
                              utc
                              // defaultValue="DD-MM-YYYY HH:mm"
                              isValidDate={valid}
                              onChange={e =>
                                  this.props.handleChange({
                                      target: { value: e, name: 'date_round2' },
                                  })
                              }
                          />
                          <FontAwesomeIcon
                              name="calendar"
                              size="2x"
                              className="date-time__icon"
                              onClick={() => this.dateRound2.current.openCalendar()}
                          />
                      </FormGroup>
                  </Col>
              </Row>
              <FormGroup>
                  <ControlLabel>Technical Competency</ControlLabel>
                  <div className="radio-group">
                      <label className="radio-group__item">
              Limited
                          <input
                              type="radio"
                              name="tech_competency_round2"
                              value="Limited"
                              onChange={e => this.props.handleChange(e)}
                              checked={this.props.tech_competency_round2 === 'Limited'}
                          />
                          <span className="checkmark" />
                      </label>
                      <label className="radio-group__item">
              Basic
                          <input
                              type="radio"
                              name="tech_competency_round2"
                              value="Basic"
                              onChange={e => this.props.handleChange(e)}
                              checked={this.props.tech_competency_round2 === 'Basic'}
                          />
                          <span className="checkmark" />
                      </label>
                      <label className="radio-group__item">
              Acceptable
                          <input
                              type="radio"
                              name="tech_competency_round2"
                              value="Acceptable"
                              onChange={e => this.props.handleChange(e)}
                              checked={this.props.tech_competency_round2 === 'Acceptable'}
                          />
                          <span className="checkmark" />
                      </label>
                      <label className="radio-group__item">
              Advanced
                          <input
                              type="radio"
                              name="tech_competency_round2"
                              value="Advanced"
                              onChange={e => this.props.handleChange(e)}
                              checked={this.props.tech_competency_round2 === 'Advanced'}
                          />
                          <span className="checkmark" />
                      </label>
                      <label className="radio-group__item">
              Exceptional
                          <input
                              type="radio"
                              name="tech_competency_round2"
                              value="Exceptional"
                              onChange={e => this.props.handleChange(e)}
                              checked={this.props.tech_competency_round2 === 'Exceptional'}
                          />
                          <span className="checkmark" />
                      </label>
                  </div>

                  <FormGroup>
                      <ControlLabel>Comment:</ControlLabel>
                      <FormControl
                          componentClass="textarea"
                          name="tech_competency_round2_cmt"
                          onChange={e => this.props.handleChange(e)}
                          value={this.props.tech_competency_round2_cmt}
                      />
                  </FormGroup>
              </FormGroup>

              <FormGroup>
                  <ControlLabel>Cutural Fit</ControlLabel>
                  <div className="radio-group">
                      <label className="radio-group__item">
              Limited
                          <input
                              type="radio"
                              value="Limited"
                              name="cultural_fit_round2"
                              onChange={e => this.props.handleChange(e)}
                              checked={this.props.cultural_fit_round2 === 'Limited'}
                          />
                          <span className="checkmark" />
                      </label>
                      <label className="radio-group__item">
              Basic
                          <input
                              type="radio"
                              value="Basic"
                              name="cultural_fit_round2"
                              onChange={e => this.props.handleChange(e)}
                              checked={this.props.cultural_fit_round2 === 'Basic'}
                          />
                          <span className="checkmark" />
                      </label>
                      <label className="radio-group__item">
              Acceptable
                          <input
                              type="radio"
                              value="Acceptable"
                              name="cultural_fit_round2"
                              onChange={e => this.props.handleChange(e)}
                              checked={this.props.cultural_fit_round2 === 'Acceptable'}
                          />
                          <span className="checkmark" />
                      </label>
                      <label className="radio-group__item">
              Advanced
                          <input
                              type="radio"
                              value="Advanced"
                              name="cultural_fit_round2"
                              onChange={e => this.props.handleChange(e)}
                              checked={this.props.cultural_fit_round2 === 'Advanced'}
                          />
                          <span className="checkmark" />
                      </label>
                      <label className="radio-group__item">
              Exceptional
                          <input
                              type="radio"
                              value="Exceptional"
                              name="cultural_fit_round2"
                              onChange={e => this.props.handleChange(e)}
                              checked={this.props.cultural_fit_round2 === 'Exceptional'}
                          />
                          <span className="checkmark" />
                      </label>
                  </div>
                  <FormGroup>
                      <ControlLabel>Comment:</ControlLabel>
                      <FormControl
                          componentClass="textarea"
                          name="cultural_fit_round2_cmt"
                          onChange={e => this.props.handleChange(e)}
                          value={this.props.cultural_fit_round2_cmt}
                      />
                  </FormGroup>
              </FormGroup>

              <FormGroup>
                  <ControlLabel>Bussiness Acument</ControlLabel>
                  <div className="radio-group">
                      <label className="radio-group__item">
              Limited
                          <input
                              type="radio"
                              value="Limited"
                              name="business_acument"
                              onChange={e => this.props.handleChange(e)}
                              checked={this.props.business_acument === 'Limited'}
                          />
                          <span className="checkmark" />
                      </label>
                      <label className="radio-group__item">
              Basic
                          <input
                              type="radio"
                              value="Basic"
                              name="business_acument"
                              onChange={e => this.props.handleChange(e)}
                              checked={this.props.business_acument === 'Basic'}
                          />
                          <span className="checkmark" />
                      </label>
                      <label className="radio-group__item">
              Acceptable
                          <input
                              type="radio"
                              value="Acceptable"
                              name="business_acument"
                              onChange={e => this.props.handleChange(e)}
                              checked={this.props.business_acument === 'Acceptable'}
                          />
                          <span className="checkmark" />
                      </label>
                      <label className="radio-group__item">
              Advanced
                          <input
                              type="radio"
                              value="Advanced"
                              name="business_acument"
                              onChange={e => this.props.handleChange(e)}
                              checked={this.props.business_acument === 'Advanced'}
                          />
                          <span className="checkmark" />
                      </label>
                      <label className="radio-group__item">
              Exceptional
                          <input
                              type="radio"
                              value="Exceptional"
                              name="business_acument"
                              onChange={e => this.props.handleChange(e)}
                              checked={this.props.business_acument === 'Exceptional'}
                          />
                          <span className="checkmark" />
                      </label>
                  </div>
                  <FormGroup>
                      <ControlLabel>Comment:</ControlLabel>
                      <FormControl
                          componentClass="textarea"
                          name="business_acument_cmt"
                          onChange={e => this.props.handleChange(e)}
                          value={this.props.business_acument_cmt}
                      />
                  </FormGroup>
              </FormGroup>

              <FormGroup>
                  <ControlLabel>Soft skills</ControlLabel>
                  <div className="radio-Group">
                      <label className="radio-group__item">
              Limited
                          <input
                              type="radio"
                              value="Limited"
                              name="soft_skill"
                              onChange={e => this.props.handleChange(e)}
                              checked={this.props.soft_skill === 'Limited'}
                          />
                          <span className="checkmark" />
                      </label>
                      <label className="radio-group__item">
              Basic
                          <input
                              type="radio"
                              value="Basic"
                              name="soft_skill"
                              onChange={e => this.props.handleChange(e)}
                              checked={this.props.soft_skill === 'Basic'}
                          />
                          <span className="checkmark" />
                      </label>
                      <label className="radio-group__item">
              Acceptable
                          <input
                              type="radio"
                              value="Acceptable"
                              name="soft_skill"
                              onChange={e => this.props.handleChange(e)}
                              checked={this.props.soft_skill === 'Acceptable'}
                          />
                          <span className="checkmark" />
                      </label>
                      <label className="radio-group__item">
              Advanced
                          <input
                              type="radio"
                              value="Advanced"
                              name="soft_skill"
                              onChange={e => this.props.handleChange(e)}
                              checked={this.props.soft_skill === 'Advanced'}
                          />
                          <span className="checkmark" />
                      </label>
                      <label className="radio-group__item">
              Exceptional
                          <input
                              type="radio"
                              value="Exceptional"
                              name="soft_skill"
                              onChange={e => this.props.handleChange(e)}
                              checked={this.props.soft_skill === 'Exceptional'}
                          />
                          <span className="checkmark" />
                      </label>
                  </div>
                  <FormGroup>
                      <ControlLabel>Comment:</ControlLabel>
                      <FormControl
                          componentClass="textarea"
                          name="soft_skill_cmt"
                          onChange={e => this.props.handleChange(e)}
                          value={this.props.soft_skill_cmt}
                      />
                  </FormGroup>
              </FormGroup>

              <FormGroup>
                  <ControlLabel>People Management</ControlLabel>
                  <div className="radio-group">
                      <label className="radio-group__item">
              Limited
                          <input
                              type="radio"
                              value="Limited"
                              name="people_management"
                              onChange={e => this.props.handleChange(e)}
                              checked={this.props.people_management === 'Limited'}
                          />
                          <span className="checkmark" />
                      </label>
                      <label className="radio-group__item">
              Basic
                          <input
                              type="radio"
                              value="Basic"
                              name="people_management"
                              onChange={e => this.props.handleChange(e)}
                              checked={this.props.people_management === 'Basic'}
                          />
                          <span className="checkmark" />
                      </label>
                      <label className="radio-group__item">
              Acceptable
                          <input
                              type="radio"
                              value="Acceptable"
                              name="people_management"
                              onChange={e => this.props.handleChange(e)}
                              checked={this.props.people_management === 'Acceptable'}
                          />
                          <span className="checkmark" />
                      </label>
                      <label className="radio-group__item">
              Advanced
                          <input
                              type="radio"
                              value="Advanced"
                              name="people_management"
                              onChange={e => this.props.handleChange(e)}
                              checked={this.props.people_management === 'Advanced'}
                          />
                          <span className="checkmark" />
                      </label>
                      <label className="radio-group__item">
              Exceptional
                          <input
                              type="radio"
                              value="Exceptional"
                              name="people_management"
                              onChange={e => this.props.handleChange(e)}
                              checked={this.props.people_management === 'Exceptional'}
                          />
                          <span className="checkmark" />
                      </label>
                  </div>
                  <FormGroup>
                      <ControlLabel>Comment:</ControlLabel>
                      <FormControl
                          componentClass="textarea"
                          name="people_management_cmt"
                          onChange={e => this.props.handleChange(e)}
                          value={this.props.people_management_cmt}
                      />
                  </FormGroup>
              </FormGroup>
              <Row>
                  <Col xs={12} sm={4} md={4} lg={4}>
                      <FormGroup>
                          <ControlLabel>YPE</ControlLabel>
                          <FormControl
                              type="number"
                              placeholder=""
                              name="ype_round2"
                              onChange={e => this.props.handleChange(e)}
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
                              className="profile-details__select"
                              name="title_round2"
                              onChange={e => this.props.handleChange(e)}
                              value={this.props.title_round2}
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
                          <ControlLabel>2st Round Status</ControlLabel>
                          <FormControl
                              componentClass="select"
                              placeholder="select"
                              className="profile-details__select"
                              name="round2_status"
                              value={this.props.round2_status}
                              onChange={e => this.props.handleChange(e)}
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
                      name="cmt_result_round2"
                      onChange={e => this.props.handleChange(e)}
                      value={this.props.cmt_result_round2}
                  />
              </FormGroup>
          </React.Fragment>
      );
  }
}

export default ProfileDetailsSecondRound;
