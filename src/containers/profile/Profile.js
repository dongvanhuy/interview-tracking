import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropsTypes from 'prop-types';
import { Table, Grid, Row, ControlLabel, ButtonToolbar, Button, Col } from 'react-bootstrap';
import { loadProfile, viewDetailData, addProfile } from './ProfileAction';


export class Profile extends Component {
    static propsTypes = {
        profile: PropsTypes.arrayOf(PropsTypes.object),
    }

    static defaultProps = {
        profile: [],
    }

    componentWillMount() {
        this.props.loadProfile();
    }

    viewDetail = (data) => {
        // alert(name);
        console.log('>>>> data ', data);
        this.props.viewDetailData(data);
        console.log('>>> onClick');
    }

    addProfileDetail = () => {
        console.log('>>>> data ');
        this.props.addProfile();
    }


    render() {
        return (
            <section className="ListCandidatePage">
                <div className="header">
                    <Grid>
                        <Row>
                            <Col lg={3}>
                                <div className="logo">
                                    <img src="https://2.pik.vn/20185720ab30-1dc9-44f2-a487-4e276fbd29f5.png" alt="1111" />
                                </div>
                            </Col>

                            <Col lg={6}>
                                <div className="timestamp" />
                            </Col>

                            <Col lg={3}>
                                <div className="View-project">
                                    <a href="" className="icon" title="User Profile">
                                        <i className="fa fa-user" />
                                    </a>
                                </div>
                            </Col>
                        </Row>
                    </Grid>

                </div>

                <div className="list">
                    <Grid>
                        <Row className="show-grid">
                            <Col lg={12}>
                                <ControlLabel>Today</ControlLabel>
                                <Table striped bordered condensed hover className="list-cadidate-table">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Time</th>
                                            <th>Name</th>
                                            <th>Age</th>
                                            <th>skill</th>
                                            <th>status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.props.profile.map((item) =>
                                            (<tr onClick={() => this.viewDetail(item)}>
                                                <td />
                                                <td />
                                                <td>{item.name}</td>
                                                <td>{item.age}</td>
                                                <td>{item.skill}</td>
                                                <td>{item.status}</td>

                                             </tr>))}
                                    </tbody>

                                </Table>
                            </Col>
                        </Row>
                    </Grid>

                    <Grid>
                        <Row className="show-grid">
                            <Col md={4} xsOffset={2}>
                                <ButtonToolbar className="btn-list-cadidate">
                                    <Button className="button-add" onClick={() => this.addProfileDetail()}>ADD</Button>
                                </ButtonToolbar>
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
    viewDetailData,
    addProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

