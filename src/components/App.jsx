import React, { Component } from 'react';
import User from './User';
import LeftPanel from './LeftPanel';
import Navbar from './Navbar';
import Footer from './Footer';
import RightPanel from './RightPanel';

class App extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <Navbar />
                </div>
                <div className='row mt-5 pt-5'>
                    <LeftPanel />
                    <User name='Andrew' />
                    <RightPanel />
                </div>
                <div className='row'>
                    <Footer />
                </div>
            </div>
        );
    }

}

export default App;