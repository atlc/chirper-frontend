import React, { Component } from 'react';

class Chirp extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <p>{this.props.text}</p>
        );
    }
}

export default Chirp;