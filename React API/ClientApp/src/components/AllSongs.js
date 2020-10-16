import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

export class AllSongs extends Component {
    static displayName = AllSongs.name;

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch("https://localhost:44325/api/Song")
            .then(res => res.json())
            .then(json => {
                this.setState(
                    {
                        isLoaded: true,
                        items: json,
                    })
            });
    }

    renderTableData() {
        return this.state.items.map((item, index) => {
            const { id, title, length, numberOnAlbum, albumID } = item
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td><Link to={{
                        pathname: '/Song/',
                        state: {
                            songid: { id }
                        }
                    }}>{title}</Link></td>
                    <td>{secondsToHms(length)}</td>
                    <td>{numberOnAlbum}</td>
                    <td>{albumID}</td>
                </tr>
            )
        })
    }


    render() {

        var { isLoaded, items } = this.state;

        if (!isLoaded) {
            return <div>Loading..</div>
        }

        else {
            return (
                <div>
                    <h1 id='title'>All songs</h1>
                    <Table stripid bordered hover>
                        <thead>
                            <tr>
                            <td>id</td>
                            <td>title</td>
                            <td>length</td>
                            <td>no on album</td>
                                <td>album id</td>
                                </tr>
                        </thead>
                        <tbody>
                            {this.renderTableData()}
                        </tbody>
                    </Table>
                </div>
            )
        }
    }
}

function secondsToHms(d) {
    d = Number(d);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return mDisplay + sDisplay;
}