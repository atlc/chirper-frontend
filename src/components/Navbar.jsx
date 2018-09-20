import React, { Component } from 'react';

class Navbar extends Component {



    render() {
        return (
            <nav className='navbar fixed-top navbar-dark bg-dark'>
                <ul className='nav nav-pills nav-fill col-5'>
                    <li className='nav-item'>
                        <button className='btn btn-success' href='#'>Home</button>
                    </li>
                    <li className='nav-item'>
                        <button className='btn btn-outline-success' href='#'>Moments</button>
                    </li>
                    <li className='nav-item'>
                        <button className='btn btn-outline-success' href='#'>Notifications</button>
                    </li>
                    <li className='nav-item'>
                        <button className='btn btn-outline-success' href='#'>Messages</button>
                    </li>
                </ul>
                <div className='col-1'>
                    <img src={require('../images/birdo.ico')} alt='' style={{width: '48px', height: '48px'}} />
                </div>
                <form class="form-inline col-4">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
        );
    }
}

export default Navbar;