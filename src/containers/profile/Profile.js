import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropsTypes from 'prop-types';
import FontAwesomeIcon from 'react-fontawesome';
import {
    Table,
    Grid,
    Row,
    Button,
    Col,
} from 'react-bootstrap';
import moment from 'moment';
import { push } from 'react-router-redux';
import uid from 'uuid';
import loading from '../../assets/images/loading.svg';
import { loadProfile, viewDetailDataId, addProfile, loadProfileThisWeek, loadProfileThisMonth } from './ProfileAction';
import { resetModalSuccess } from '../profileDetails/ProfileDetailsAction';

export class Profile extends Component {
    static propsTypes = {
        profileToday: PropsTypes.arrayOf(PropsTypes.object),
        profilethisweek: PropsTypes.arrayOf(PropsTypes.object),
        profilethismonth: PropsTypes.arrayOf(PropsTypes.object),
    }

    static defaultProps = {
        profileToday: [],
        profilethisweek: [],
        profilethismonth: [],
    }

    componentWillMount() {
        this.props.loadProfile();
        this.props.loadProfileThisWeek();
        this.props.loadProfileThisMonth();
    }

    viewDetailId = (id) => {
        this.props.viewDetailDataId(id);
        this.props.resetModalSuccess();
        this.props.push({
            pathname: '/profile-details',
            state: {
                candidateId: id,
            },
        });
    }

    callLoading = () => (
        <div className="loading-block">
            <Table bordered responsive className="list-cadidate-table" xs={12} sm={12} md={12} lg={12}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Time</th>
                        <th>Name</th>
                        <th>Recruiter</th>
                        <th>Skill</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
            </Table>
            <div className="loading-block__spinner">
                <img src={loading} alt="loading" />
            </div>
        </div>
    )

    addProfileDetail = () => {
        this.props.addProfile();
        this.props.resetModalSuccess();
        this.props.push('/profile-info');
    }

    render() {
        // const selectedDate = this.state.startDate.format('LLL');
        const { profileToday, profilethisweek, profilethismonth } = this.props;

        const rows = profileToday.map((item, index) =>
            (
                <tr key={uid()}>
                    <td>{index + 1}</td>
                    <td>{moment(item.date_round1).format('DD-MM-YYYY')}</td>
                    <td>{item.candidate_fullname}</td>
                    <td>{item.recruiter}</td>
                    <td>{item.position_apply}</td>
                    <td>{item.round1_status}</td>
                    <td className="text-center"><button type="button" className="btn btn-default" onClick={() => this.viewDetailId(item.candidate_id)}><i className="fa fa-pencil" /> Edit</button></td>
                </tr>));

        const rowsthisweek = profilethisweek.map((item, index) =>
            (
                <tr key={uid()}>
                    <td>{index + 1}</td>
                    <td>{moment(item.date_round1).format('DD-MM-YYYY')}</td>
                    <td>{item.candidate_fullname}</td>
                    <td>{item.recruiter}</td>
                    <td>{item.position_apply}</td>
                    <td>{item.round1_status}</td>
                    <td className="text-center"><button type="button" className="btn btn-default" onClick={() => this.viewDetailId(item.candidate_id)}><i className="fa fa-pencil" /> Edit</button></td>
                </tr>));

        const rowsthismonth = profilethismonth.map((item, index) =>
            (
                <tr key={uid()}>
                    <td>{index + 1}</td>
                    <td>{moment(item.date_round1).format('DD-MM-YYYY')}</td>
                    <td>{item.candidate_fullname}</td>
                    <td>{item.recruiter}</td>
                    <td>{item.position_apply}</td>
                    <td>{item.round1_status}</td>
                    <td className="text-center"><button type="button" className="btn btn-default" onClick={() => this.viewDetailId(item.candidate_id)}><i className="fa fa-pencil" /> Edit</button></td>
                </tr>));

        return (
            <section className="list-candidate-page">
                <div className="list">
                    <Grid>
                        <Row className="show-grid">
                            <div className="list-table">
                                <Col xs={6} sm={6} md={6} lg={6}>
                                    <h2 className="list-table__title">Today</h2>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={12}>
                                    { profileToday.length < 1 &&
                                        this.callLoading()
                                    }
                                    { profileToday.length >= 1 &&
                                        <Table striped bordered condensed hover responsive className="list-cadidate-table" xs={12} sm={12} md={12} lg={12}>
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Time</th>
                                                    <th>Name</th>
                                                    <th>Recruiter</th>
                                                    <th>Skill</th>
                                                    <th>Status</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>{ rows }</tbody>
                                        </Table>
                                    }
                                </Col>
                            </div>

                            <div className="list-table">
                                <Col xs={12} sm={12} md={12} lg={12}>
                                    <h2 className="list-table__title">This week</h2>
                                </Col>

                                <Col xs={12} sm={12} md={12} lg={12}>
                                    { profilethisweek.length < 1 &&
                                        this.callLoading()
                                    }
                                    { profilethisweek.length > 1 &&
                                        <Table striped bordered condensed hover responsive className="list-cadidate-table" xs={12} sm={12} md={12} lg={12}>
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Time</th>
                                                    <th>Name</th>
                                                    <th>Recruiter</th>
                                                    <th>Skill</th>
                                                    <th>Status</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {rowsthisweek}
                                            </tbody>
                                        </Table>
                                    }
                                </Col>
                            </div>

                            <div className="list-table">
                                <Col xs={12} sm={12} md={12} lg={12}>
                                    <h2 className="list-table__title">This month</h2>
                                </Col>

                                <Col xs={12} sm={12} md={12} lg={12}>
                                    { profilethisweek.length < 1 &&
                                        this.callLoading()
                                    }
                                    { profilethismonth.length > 1 &&
                                        <Table striped bordered condensed hover responsive className="list-cadidate-table" xs={12} sm={12} md={12} lg={12}>
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Time</th>
                                                    <th>Name</th>
                                                    <th>Recruiter</th>
                                                    <th>Skill</th>
                                                    <th>Status</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {rowsthismonth}
                                            </tbody>
                                        </Table>
                                    }
                                </Col>
                            </div>
                        </Row>
                    </Grid>
                </div>
                <Button title="Add candidate" className="add-cadidate-btn" onClick={() => this.addProfileDetail()}><FontAwesomeIcon
                    name="plus"
                    size="2x"
                />
                </Button>
            </section>
        );
    }
}

const mapStateToProps = state => ({
    profileToday: state.profile.dataProfile,
    profilethisweek: state.profile.dataProfileThisWeek,
    profilethismonth: state.profile.dataProfileThisMonth,
});

const mapDispatchToProps = {
    loadProfile,
    loadProfileThisWeek,
    loadProfileThisMonth,
    viewDetailDataId,
    addProfile,
    push,
    resetModalSuccess,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Profile);
