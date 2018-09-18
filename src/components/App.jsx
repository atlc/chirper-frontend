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
            <React.Fragment>
                <div className='container'>
                    <Navbar />
                </div>
                <div className='container'>
                    <LeftPanel />
                    <User name='Andrew' />
                    <Footer />
                </div>
            </React.Fragment>
        );
    }

}

export default App;