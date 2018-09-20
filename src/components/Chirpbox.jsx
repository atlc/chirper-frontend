import React, { Component } from 'react';

class Chirpbox extends Component {


    render() {
        return (
            <div class="input-group mb-4 pb-4">
                <input type="text" class="form-control" placeholder="Chirp something to the world!" />
                <div class="input-group-append">
                    <button class="btn btn-outline-success" type="button" id="ChirpButton">Chirp!</button>
                </div>
            </div>
        );
    }
}

export default Chirpbox;