import React, { Component } from 'react';
import Chirp from './Chirp';

class Timeline extends Component {

    render() {
        return (
            <div className='col-4'>

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