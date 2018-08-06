import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ErrorPage extends Component {
    render() {
        return (
            <div className="wrap">
                <div className="logo">
                    <h1>404</h1>
                    <p>Error occurred! - File not Found</p>
                    <div className="sub">
                        <p>
                            <Link to="/">Home</Link>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ErrorPage;
