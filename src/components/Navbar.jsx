import React, { Component } from 'react';

class Navbar extends Component {



    render() {
        return (
            <div className='container'>
                <nav className='navbar fixed-top navbar-dark bg-dark'>
                    <ul className='nav nav-pills nav-fill'>
                        <li className='nav-item'>
                            <a className='nav-link active' href='#'>Home</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>Moments</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>Notifications</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>Messages</a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navbar;