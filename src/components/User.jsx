import React, { Component } from 'react';

class User extends Component {



    render() {
        return (
            <h1>Hello world, I am {this.props.name}! </h1>
        );
    }
}

export default User;