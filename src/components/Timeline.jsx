import React, { Component } from 'react';
import Chirp from './Chirp';

class Timeline extends Component {

    render() {
        return (
            <React.Fragment>
                <Chirp />
                <Chirp />
                <Chirp />
            </React.Fragment>
        );
    }
}

export default Timeline;