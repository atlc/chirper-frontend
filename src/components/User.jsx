import React, { Component } from 'react';

class User extends Component {



    render() {
        return (
            <div className='col-6'>
                <h1>Hello world, I am {this.props.name}! </h1>
            </div>
        );
    }
}

export default User;