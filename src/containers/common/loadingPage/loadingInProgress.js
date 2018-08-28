import React from 'react';
import PropTypes from 'prop-types';
import LoadingIcon from '../../../assets/images/loading.svg';

export default class LoadingInProgress extends React.Component {
    static propTypes = {
        show: PropTypes.bool,
    };

    static defaultProps = {
        show: false,
    };

    render() {
        const { show } = this.props;

        return (
            show &&
            <React.Fragment>
                <div className="loading-in-progress">
                    <div className="loading-in-progress__spinner">
                        <img src={LoadingIcon} alt="Loading icon" style={{ width: '50px' }} />
                    </div>
                    <div className="loading-in-progress__content">
                        <p>Please wait.</p>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
