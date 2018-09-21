import React, { Component } from 'react';
import Chirp from './Chirp';

class Timeline extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this); 
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            placeholder: 'Chirp something to the world!',
            chirp: ''
        }
    }


    handleChange(event) {
        this.setState({ chirp: event.target.value });
    }

    handleClick() {
        alert(this);
        this.setState({ chirp: '', placeholder: ''});        
    }


    render() {
        return (
            <div className='col-6'>
                <div className="input-group mb-4 pb-4">
                    <textarea onChange={(event) => this.handleChange(event)} type="text" className="form-control" placeholder={this.state.placeholder} id='Chirpbox' />
                    <button onClick={this.handleClick} className="btn btn-outline-info" type="button">Chirp!</button>
                </div>
                

                <Chirp text="<Reverend> IRC is just multiplayer notepad." />
                <Chirp text="<Sonium> someone speak python here?
                            <lucky> HHHHHSSSSSHSSS
                            <lucky> SSSSS
                            <Sonium> the programming language" />
                <Chirp text="<erno> hm. I've lost a machine.. literally _lost_. it responds to ping, it works completely, I just can't figure out where in my apartment it is." />
                <Chirp text="<Patrician|Away> what does your robot do, sam
                            <bovril> it collects data about the surrounding environment, then discards it and drives into walls" />
            </div>
        );
    }
}

export default Timeline;