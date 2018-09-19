import React, { Component } from 'react';
const forceWhitespace = { whiteSpace: 'pre-wrap' };

class Chirp extends Component {



    render() {
        return (
            <p style={forceWhitespace}>This is a test Chirp, please ignore!!</p>
        );
    }
}

export default Chirp;