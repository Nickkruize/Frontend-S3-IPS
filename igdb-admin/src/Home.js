import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Home extends Component {
    static displayName = Home.name;
    constructor(props) {
        super(props);

        this.state = {
            User : null
        }
    }

    componentDidMount() {
        var session = new Session();
        this.setState({ User: session.get("User") });
    }

    getUsername(){
        if (this.state.User != null) {
            return(
            <ul>
            <h3>Welcome, {this.state.User.username}</h3>
            </ul>
            )}
        }

    render() {
            return (
                <div style={{textAlign:"center"}}> 
                    {this.getUsername()}
                    <ul>
                        <li><Link to="/UserManagement">Manage users</Link></li>
                    </ul>
                </div>
            )
        }
    }


class Session extends Map {
    set(id, value) {
        if (typeof value === 'object') value = JSON.stringify(value);
        sessionStorage.setItem(id, value);
    }

    get(id) {
        const value = sessionStorage.getItem(id);
        try {
            return JSON.parse(value);
        } catch (e) {
            return value;
        }
    }
}

