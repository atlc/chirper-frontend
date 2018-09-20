import React, { Component } from 'react';

class User extends Component {


    render() {
        return (
            <p>{this.props.name}, <em>@{this.props.username}</em></p>
        );
    }
}

export default User;