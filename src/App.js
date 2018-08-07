import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.css';
import Profile from './containers/profile/Profile';
import { FirstRound } from './containers/firstRound/FirstRound';

class App extends Component {
    render() {
        return (
            <div className="dip-container-fluid">
                {/* <Route exact path="/" component={Profile} /> */}
                <Route exact path="/" component={FirstRound} />
            </div>
        );
    }
}

export default App;
