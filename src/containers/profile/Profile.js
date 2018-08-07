import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropsTypes from 'prop-types';
import { loadProfile } from './ProfileAction';

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

    render() {
        return (
            this.props.profile.map((item) => <div>name: {item.name}</div>)
        );
    }
}

const mapStateToProps = state => ({
    profile: state.profile.dataProfile,
});

const mapDispatchToProps = {    
    loadProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

