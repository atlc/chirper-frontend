import React, { Component } from 'react';

class LeftPanel extends Component {



    render() {
        return (
            <ul className='nav flex-column mt-5 pt-5'>
                <li className='nav-item'>
                    <a className='nav-link' href='#'>Trending Tweets</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href='#'>Trending Topics</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href='#'>Trending People</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href='#'>Stories of the day</a>
                </li>
                <li></li>
            </ul>
        );
    }
}

export default LeftPanel;