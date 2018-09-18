import React, { Component } from 'react';

class Chirp extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <div className='Chirp'>
                <div className='UserInfo'>
                    <p>This is a test Chirp!</p>
                </div>
            </div>
        );
    }
}

export default Chirp;