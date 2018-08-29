import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropsTypes from 'prop-types';
import FontAwesomeIcon from 'react-fontawesome';
import {
    // Table,
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
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

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
        // this.props.viewDetailDataId(id);
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
                <Thead>
                    <Tr>
                        <Th>#</Th>
                        <Th>Time</Th>
                        <Th>Name</Th>
                        <Th>Recruiter</Th>
                        <Th>Skill</Th>
                        <Th>Status</Th>
                        <Th>Action</Th>
                    </Tr>
                </Thead>
            </Table>
            <div className="loading-block__spinner">
                <img src={loading} alt="loading" />
            </div>
        </div>
    )

    addProfileDetail = () => {
        // this.props.addProfile();
        this.props.push('/profile-info');
    }

    render() {
        // const selectedDate = this.state.startDate.format('LLL');
        const { profileToday, profilethisweek, profilethismonth } = this.props;

        const rows = profileToday.map((item, index) =>
            (
                <Tr key={uid()}>
                    <Td>{index + 1}</Td>
                    <Td>{moment(item.date_round1).format('DD-MM-YYYY')}</Td>
                    <Td>{item.candidate_fullname}</Td>
                    <Td>{item.recruiter}</Td>
                    <Td>{item.position_apply}</Td>
                    <Td>{item.round1_status}</Td>
                    <Td className="text-center"><button type="button" className="btn btn-default" onClick={() => this.viewDetailId(item.candidate_id)}><i className="fa fa-pencil" /> Edit</button></Td>
                </Tr>));

        const rowsthisweek = profilethisweek.map((item, index) =>
            (
                <Tr key={uid()}>
                    <Td>{index + 1}</Td>
                    <Td>{moment(item.date_round1).format('DD-MM-YYYY')}</Td>
                    <Td>{item.candidate_fullname}</Td>
                    <Td>{item.recruiter}</Td>
                    <Td>{item.position_apply}</Td>
                    <Td>{item.round1_status}</Td>
                    <Td className="text-center"><button type="button" className="btn btn-default" onClick={() => this.viewDetailId(item.candidate_id)}><i className="fa fa-pencil" /> Edit</button></Td>
                </Tr>));

        const rowsthismonth = profilethismonth.map((item, index) =>
            (
                <Tr key={uid()}>
                    <Td>{index + 1}</Td>
                    <Td>{moment(item.date_round1).format('DD-MM-YYYY')}</Td>
                    <Td>{item.candidate_fullname}</Td>
                    <Td>{item.recruiter}</Td>
                    <Td>{item.position_apply}</Td>
                    <Td>{item.round1_status}</Td>
                    <Td className="text-center"><button type="button" className="btn btn-default" onClick={() => this.viewDetailId(item.candidate_id)}><i className="fa fa-pencil" /> Edit</button></Td>
                </Tr>));

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
                                            <Thead>
                                                <Tr>
                                                    <Th>#</Th>
                                                    <Th>Time</Th>
                                                    <Th>Name</Th>
                                                    <Th>Recruiter</Th>
                                                    <Th>Skill</Th>
                                                    <Th>Status</Th>
                                                    <Th>Action</Th>
                                                </Tr>
                                            </Thead>
                                            <Tbody>{ rows }</Tbody>
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
                                            <Thead>
                                                <Tr>
                                                    <Th>#</Th>
                                                    <Th>Time</Th>
                                                    <Th>Name</Th>
                                                    <Th>Recruiter</Th>
                                                    <Th>Skill</Th>
                                                    <Th>Status</Th>
                                                    <Th>Action</Th>
                                                </Tr>
                                            </Thead>
                                            <Tbody>
                                                {rowsthisweek}
                                            </Tbody>
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
                                            <Thead>
                                                <Tr>
                                                    <Th>#</Th>
                                                    <Th>Time</Th>
                                                    <Th>Name</Th>
                                                    <Th>Recruiter</Th>
                                                    <Th>Skill</Th>
                                                    <Th>Status</Th>
                                                    <Th>Action</Th>
                                                </Tr>
                                            </Thead>
                                            <Tbody>
                                                {rowsthismonth}
                                            </Tbody>
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
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Profile);
