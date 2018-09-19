import React, { Component } from 'react';

class Navbar extends Component {



    render() {
        return (
            <nav className='navbar fixed-top navbar-dark bg-dark'>
                <ul className='nav nav-pills nav-fill col-5'>
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
                <div className='col-1'>
                    <img src='./images/birdo.ico' alt='bird icon' />
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