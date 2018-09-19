import React, { Component } from 'react';

class Footer extends Component {


    render() {
        return (
            <div className='col-12'>
                <nav className='navbar navbar-bottom navbar-dark bg-dark'>
                    <ul className='nav nav-pills nav-fill'>
                        <li className='nav-item'>
                            <a className='nav-link active' href='#'>Contact</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>Copyright 2018</a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Footer;