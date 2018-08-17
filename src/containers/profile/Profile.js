import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropsTypes from 'prop-types';
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
import { loadProfile, viewDetailDataId, addProfile, loadProfileThisWeek, loadProfileThisMonth } from './ProfileAction';

export class Profile extends Component {
    static propsTypes = {
        profile: PropsTypes.arrayOf(PropsTypes.object),
        profilethisweek: PropsTypes.arrayOf(PropsTypes.object),
        profilethismonth: PropsTypes.arrayOf(PropsTypes.object),
    }

    static defaultProps = {
        profile: [],
        profilethisweek: [],
        profilethismonth: [],
    }

    state = {
        startDate: moment(),
    };

    componentWillMount() {
        this.props.loadProfile();
        this.props.loadProfileThisWeek();
        this.props.loadProfileThisMonth();
    }

    viewDetailId = (data) => {
        this.props.viewDetailDataId(data);
        this.props.push('/profile-detail');
    }

    addProfileDetail = () => {
        this.props.addProfile();
    }

    render() {
        const selectedDate = this.state.startDate.format('LLL');

        const rows = this.props.profile.map((item, index) =>
            (
                <tr key={uid()} onClick={() => this.viewDetailId(item.candidate_id)}>
                    <td>{index + 1}</td>
                    <td>{item.date_round1}</td>
                    <td>{item.candidate_fullname}</td>
                    <td>{item.recruiter}</td>
                    <td>{item.position_apply}</td>
                    <td>{item.round1_status}</td>
                </tr>));

        const rowsthisweek = this.props.profilethisweek.map((item, index) =>
            (
                <tr key={uid()} onClick={() => this.viewDetailId(item.candidate_id)}>
                    <td>{index + 1}</td>
                    <td>{item.date_round1}</td>
                    <td>{item.candidate_fullname}</td>
                    <td>{item.recruiter}</td>
                    <td>{item.position_apply}</td>
                    <td>{item.round1_status}</td>
                </tr>));

        const rowsthismonth = this.props.profilethismonth.map((item, index) =>
            (
                <tr key={uid()} onClick={() => this.viewDetailId(item.candidate_id)}>
                    <td>{index + 1}</td>
                    <td>{item.date_round1}</td>
                    <td>{item.candidate_fullname}</td>
                    <td>{item.recruiter}</td>
                    <td>{item.position_apply}</td>
                    <td>{item.round1_status}</td>
                </tr>));

        return (
            <section className="list-candidate-page">
                <div className="list">
                    <Grid>
                        <Row className="show-grid">
                            <div className="list-table">
                                <Col xs={12} sm={12} md={12} lg={12}>
                                    <h2>To Day _ {selectedDate}</h2>
                                </Col>

                                <Col xs={12} sm={12} md={12} lg={12}>
                                    <Table striped bordered condensed hover responsive className="list-cadidate-table" xs={12} sm={12} md={12} lg={12}>
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Time</th>
                                                <th>Name</th>
                                                <th>Recruiter</th>
                                                <th>Skill</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {rows}
                                        </tbody>
                                    </Table>
                                </Col>
                            </div>

                            <div className="list-table">
                                <Col xs={12} sm={12} md={12} lg={12}>
                                    <h2>This Week</h2>
                                </Col>

                                <Col xs={12} sm={12} md={12} lg={12}>
                                    <Table striped bordered condensed hover responsive className="list-cadidate-table" xs={12} sm={12} md={12} lg={12}>
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Time</th>
                                                <th>Name</th>
                                                <th>Recruiter</th>
                                                <th>Skill</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {rowsthisweek}
                                        </tbody>
                                    </Table>
                                </Col>
                            </div>

                            <div className="list-table">
                                <Col xs={12} sm={12} md={12} lg={12}>
                                    <h2>This Month</h2>
                                </Col>

                                <Col xs={12} sm={12} md={12} lg={12}>
                                    <Table striped bordered condensed hover responsive className="list-cadidate-table" xs={12} sm={12} md={12} lg={12}>
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Time</th>
                                                <th>Name</th>
                                                <th>Recruiter</th>
                                                <th>Skill</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {rowsthismonth}
                                        </tbody>
                                    </Table>
                                </Col>
                            </div>
                        </Row>
                    </Grid>
                </div>

                <div className="btn-list-cadidate">
                    <Grid>
                        <Row>
                            <Col className="btn-col" xs={12} sm={3} md={3} lg={3}>
                                <Button className="button-add" onClick={() => this.addProfileDetail()}>ADD</Button>
                            </Col>
                        </Row>
                    </Grid>
                </div>


            </section>
        );
    }
}

const mapStateToProps = state => ({
    profile: state.profile.dataProfile,
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
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Profile);
