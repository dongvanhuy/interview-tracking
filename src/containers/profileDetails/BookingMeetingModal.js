/* eslint-disable indent */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
  FormGroup,
  FormControl,
  ControlLabel,
  Row,
  Col,
} from 'react-bootstrap';
import { Modal, Button } from 'react-bootstrap/lib';
import Datetime from 'react-datetime';
import FontAwesomeIcon from 'react-fontawesome';
import { hideModalBookMeetingAction } from './ProfileDetailsAction';

export class BookingMeetingModal extends Component {
  static defaultProps = {
    show: false,
    title: '',
    candidateName: '',
    handleClose: () => {},
    bookMeeting: () => {},
  };

  constructor(props) {
    super(props);
    this.state = this.initState;
    this.startMeeting = React.createRef();
    this.endMeeting = React.createRef();
    this.dateRound1 = React.createRef();
  }

  initState = {
    start_time: '',
    end_time: '',
    interviewer_01: '',
    interviewer_02: '',
    isChecking: false,
    errorMessages: {
        errStartTimeMeeting: '',
        errEndTimeMeeting: '',
        errInterviewer: '',
        errTime: '',
    },
  };

  propsTypes = {
    show: PropTypes.bool,
    title: PropTypes.string,
    candidateName: PropTypes.string,
    handleClose: PropTypes.func,
    bookMeeting: PropTypes.func,
  };

  handleChange = e => {
    const { value, name } = e.target;
    const stateInit = this.state;
    stateInit[name] = value;
    const { isChecking } = this.state;
    const result = moment(this.state.start_time).isBefore(
        this.state.end_time,
        'minute',
    );
    if (isChecking) {
        stateInit.start_time !== ''
            ? (stateInit.errorMessages.errStartTimeMeeting = '')
            : (stateInit.errorMessages.errStartTimeMeeting =
          'Choose a start time, pls.');
        stateInit.end_time !== ''
            ? (stateInit.errorMessages.errEndTimeMeeting = '')
            : (stateInit.errorMessages.errEndTimeMeeting =
          'Choose a end time, pls.');
        stateInit.interviewer_01 !== '' ||
    stateInit.interviewer_02 !== ''
            ? (stateInit.errorMessages.errInterviewer = '')
            : (stateInit.errorMessages.errInterviewer =
          'Choose an interviewer(s), pls.');
        !result
            ? (stateInit.errorMessages.errTime =
          'Please choose reasonable datetime.')
            : (stateInit.errorMessages.errTime = '');
    }
    this.setState({ ...stateInit });
  }


  handleBookMeeting = () => {
    this.checkValidate();
    const { errorMessages } = this.state;
    const dataSave = this.state;
    // book meeting room
    const params = {
      Subject: `Interview for ${this.props.candidateName}`,
      Body: {
        ContentType: 'HTML',
        Content: 'The interview will be begin at this time!',
      },
      Start: {
        DateTime: moment.utc(dataSave.start_time).format('YYYY-MM-DDTHH:mm:ss'),
        TimeZone: 'SE Asia Standard Time',
      },
      End: {
        DateTime: moment.utc(dataSave.end_time).format('YYYY-MM-DDTHH:mm:ss'),
        TimeZone: 'SE Asia Standard Time',
      },
      Attendees: [
        {
          EmailAddress: {
            Address: dataSave.interviewer_01,
            Name: '',
          },
          Type: 'Required',
        },
        {
          EmailAddress: {
            Address: dataSave.interviewer_02,
            Name: '',
          },
          Type: 'Required',
        },
      ],
    };
    if (
        errorMessages.errStartTimeMeeting === '' &&
        errorMessages.errEndTimeMeeting === '' &&
        errorMessages.errInterviewer === '' &&
        errorMessages.errTime === ''
    ) {
        this.props.bookMeeting(params);
    }
  };

  checkValidate = () => {
    const startTime = this.state.start_time;
    const endTime = this.state.end_time;
    const interviewer1 = this.state.interviewer_01;
    const interviewer2 = this.state.interviewer_02;
    const { errorMessages } = this.state;
    const result = moment(this.state.start_time).isBefore(
        this.state.end_time,
        'minute',
    );
    startTime === ''
          ? (errorMessages.errStartTimeMeeting = 'Choose a start time, pls.')
          : (errorMessages.errStartTimeMeeting = '');
      endTime === ''
          ? (errorMessages.errEndTimeMeeting = 'Choose a end time, pls.')
          : (errorMessages.errEndTimeMeeting = '');
      interviewer1 === '' && interviewer2 === ''
          ? (errorMessages.errInterviewer = 'Choose an interviewer(s), pls.')
          : (errorMessages.errInterviewer = '');
      !result
          ? (errorMessages.errTime = ' Please choose reasonable datetime.')
          : (errorMessages.errTime = '');

      this.setState({ ...errorMessages, isChecking: true });
  }

  render() {
    const { errorMessages } = this.state;
    const yesterday = Datetime.moment().subtract(1, 'day');
    const valid = current =>
      current.isAfter(yesterday) && current.day() !== 0 && current.day() !== 6;
    return (
      <React.Fragment>
        <Modal
          show={this.props.show}
          onHide={this.props.handleClose}
          className="success-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row className="show-grid">
              <Col xs={12} sm={6} md={6} lg={6}>
                <FormGroup className="date-time__one">
                  <ControlLabel>
                    Start Meeting(<span className="span">*</span>)
                  </ControlLabel>
                  <Datetime
                    isValidDate={valid}
                    inputProps={{
                      readOnly: true,
                      placeholder: 'Select start time',
                    }}
                    dateFormat="DD-MM-YYYY"
                    timeFormat="HH:mm"
                    ref={this.startMeeting}
                    utc
                    onChange={e =>
                      this.handleChange({
                        target: { value: e, name: 'start_time' },
                      })
                    }
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
                  <ControlLabel>
                    End Meeting(<span className="span">*</span>)
                  </ControlLabel>
                  <Datetime
                    isValidDate={valid}
                    inputProps={{
                      readOnly: true,
                      placeholder: 'Select end time',
                    }}
                    dateFormat="DD-MM-YYYY"
                    timeFormat="HH:mm"
                    ref={this.endMeeting}
                    utc
                    onChange={e =>
                      this.handleChange({
                        target: { value: e, name: 'end_time' },
                      })
                    }
                  />
                  <FontAwesomeIcon
                    name="calendar"
                    size="2x"
                    className="date-time__icon"
                    onClick={() => this.endMeeting.current.openCalendar()}
                  />
                  {errorMessages.errEndTimeMeeting && <span className="error_msg">{errorMessages.errEndTimeMeeting}</span>}
                  {errorMessages.errTime && <span className="error_msg">{errorMessages.errTime}</span>}
                </FormGroup>
              </Col>
              <Col xs={12} sm={6} md={6} lg={6}>
                <FormGroup>
                    <ControlLabel>
                    Interviewer email 1(<span className="span">*</span>)
                    </ControlLabel>
                    <FormControl
                        type="text"
                        placeholder="Please enter the email ..."
                        className={errorMessages.errInterviewer ? 'borderInterviewer' : ''}
                        onChange={(e) => this.handleChange(e)}
                        name="interviewer_01"
                    />
                    {errorMessages.errInterviewer && <span className="error_msg">{errorMessages.errInterviewer}</span>}
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Interviewer email 2</ControlLabel>
                    <FormControl
                        type="text"
                        placeholder="Please enter the email ..."
                        onChange={(e) => this.handleChange(e)}
                        name="interviewer_02"
                    />
                </FormGroup>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={this.handleBookMeeting}
              className="success-modal__button-yellow"
            >
              SEND
            </Button>
            <Button onClick={this.props.handleClose}>CANCEL</Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = {
  hideModalBookMeetingAction,
};

export default connect(
  null,
  mapDispatchToProps,
)(BookingMeetingModal);
