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

    render() {
        if (this.state.User != null) {
            return <div>
                <h3>{this.state.User.username}</h3>
                <div>
                    <ul>
                        <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>
                        <li><a href='https://facebook.github.io/react/'>React</a> for client-side code</li>
                        <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>
                        <li><Link to="/AllPublishers">View All Publishers</Link></li>
                        <li><Link to="/AllGames">View All Games</Link></li>
                        <li><Link to="/AllGenres">View All Genres</Link></li>
                    </ul>
                </div>
                </div>
        }
            return (
                <div>
                    <ul>
                        <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>
                        <li><a href='https://facebook.github.io/react/'>React</a> for client-side code</li>
                        <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>
                        <li><Link to="/AllPublishers">View All Publishers</Link></li>
                        <li><Link to="/AllGames">View All Games</Link></li>
                        <li><Link to="/AllGenres">View All Genres</Link></li>
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
