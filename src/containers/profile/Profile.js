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
import { loadProfile, viewDetailData, addProfile, getCandidateId} from './ProfileAction';


export class Profile extends Component {
    static propsTypes = {
        profile: PropsTypes.arrayOf(PropsTypes.object),
    }

    static defaultProps = {
        profile: [],
    }

    state = {
        startDate: moment()
    };

    loadgetCandidateId = (e) => {
        this.props.getCandidateId(e);
        console.log('>>>>>>');
    }

    componentWillMount() {
        this.props.loadProfile();
    }

    viewDetail = (data) => {
        // alert(name);
        this.props.viewDetailData(data);
        this.props.push('/profile-detail');
    }

    addProfileDetail = () => {
        this.props.addProfile();
        this.props.push('/profile-detail');
    }

    render() {
        const selectedDate = this.state.startDate.format('LLL');

        const rows = this.props.profile.map((item,e) =>
            (
                <tr key={uid(e)} onClick={() => this.viewDetail(item,e)}>
                    <td>{item.candidate_id}</td>
                    <td>{item.date_round1}</td>
                    <td>{item.candidate_fullname}</td>
                    <td>{item.recruiter}</td>
                    <td>{item.position_apply}</td>
                    <td>{item.round1_status}</td>
                </tr>));
        return (
            <section className="ListCandidatePage">
                <div className="header">
                    <Grid>
                        <Row>
                            <Col xs={6} sm={6} md={6} lg={6}>
                                <div className="logo">
                                    <img src="https://2.pik.vn/20185720ab30-1dc9-44f2-a487-4e276fbd29f5.png" alt="1111" />
                                    
                                </div>
                            </Col>

                            <Col xs={6} sm={6} md={6} lg={6}>
                                <div className="View-project">
                                    <a href="" className="icon" title="User Profile">
                                        <i className="fa fa-user fa-2x" />
                                    </a>
                                </div>
                            </Col>
                        </Row>
                    </Grid>

                </div>

                <div className="list">
                    <Grid>
                        <Row className="show-grid">
                            <Col xs={12} sm={12} md={12} lg={12}>
                                <div className="today">
                                    <h2>Today _ {selectedDate}</h2>
                                </div>
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
                        </Row>
                    </Grid>
                </div>

                <div className="btn-list-cadidate">
                    <Grid>
                        <Row>
                            <Col className ="btn-col" xs={12} sm={3} md={3} lg={3}>
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
});

const mapDispatchToProps = {
    loadProfile,
    getCandidateId,
    viewDetailData,
    addProfile,
    push,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Profile);
