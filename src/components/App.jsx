import React, { Component } from 'react';
import User from './User';
import LeftPanel from './LeftPanel';
import Navbar from './Navbar';
import Footer from './Footer';

class App extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div className='container'>
                <Navbar />
                <LeftPanel />
                <h1>Testing for Chirper!</h1>
                
                <User name="Andrew" />
                <Footer />
            </div>
        );
    }

}

export default App;