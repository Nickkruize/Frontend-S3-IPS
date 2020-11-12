import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import {Container } from 'reactstrap';
import './Song.css';
import Table from 'react-bootstrap/Table';

export class Album extends Component {
    static displayName = Album.name;

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            error: Error
        }
    }

    componentDidMount() {

        const id = this.props.match.params.id;

        const api = axios.create({
            baseURL: "https://localhost:44382/api/users/getall"
        })

        api.get()
            .then(res => {
                console.log(res.data)
                this.setState({ users: res.data })
            }).catch(error => {
                console.error(error);
                this.setState({ error: error })
            });
    }

    //renderData() {
    //    return (
    //        <Container fluid>
    //            <Row>
    //                {this.state.songs.map((item) => (
    //                    <Col xs={4}>
    //                        <Link to={{ pathname: `/Song/${item.id}` }}><img src="https://media.nu.nl/m/il5xbunadizj_wd640.jpeg" /> </Link>
    //                        <p>{item.title}</p>
    //                    </Col>
    //                ))};
    //            </Row>
    //        </Container>
    //    )
    //}

    renderTableData() {
        if (this.state.users.length > 0) {
            return this.state.users.map((item, index) => {
                const { id, username, email, password} = item
                return (
                    <tr key={index}>
                        <td>{id}</td>
                        <td>{username}</td>
                        <td>{email}</td>
                        <td>{password}</td>        
                    </tr>
                )
            })
        }
        else {
            return null
        }
    }

    CheckForSongs() {
        if (this.renderTableData() != null) {
            return (
                <Table stripid bordered hover>
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>username</td>
                            <td>email</td>
                            <td>password</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTableData()}
                    </tbody>
                </Table>
            )
        }
        else {
            return <h2> No users found </h2>
        }
    }


    render() {
        return (
            <Container fluid>
                <div>
                    {this.CheckForSongs()}
                    </div>
            </Container>
        )
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