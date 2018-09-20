import React, { Component } from 'react';
import User from './User';

class Chirp extends Component {


    render() {
        return (
            <div class="card pb-3 mb-3">
                <div class="card-header">
                    <User name='Andrew Cartwright' username='atlc' />
                </div>
                <div class="card-body">
                    <p class="card-text">{this.props.text}</p>
                    <a href="#" class="btn btn-success">Rechirp</a> <a href="#" class="btn btn-success">Favorite</a>
                </div>
            </div>
        );
    }
}

export default Chirp;