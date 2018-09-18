import React, { Component } from 'react';

class Navbar extends Component {



    render() {
        return (
            <div>
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Profile</a>
                    </li>
                </ul>
            </div>
        );
    }
}
        
export default Navbar;