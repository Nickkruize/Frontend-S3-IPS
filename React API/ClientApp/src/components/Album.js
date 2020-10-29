import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { get } from 'jquery';
import { Row, Col, Container, Form } from 'reactstrap';
import './Song.css';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Bootstrap from 'bootstrap';

export class Album extends Component {
    static displayName = Album.name;

    constructor(props) {
        super(props);
        this.state = {
            album: Album,
            songs: [],
            error: Error
        }
    }

    componentDidMount() {

        const id = this.props.match.params.id;

        const api = axios.create({
            baseURL: "https://localhost:44325/api/Albums"
        })

        api.get('/' + id,)
            .then(res => {
                console.log(res.data)
                this.setState({ album: res.data })
                this.setState({ songs: res.data.songs })
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
        if (this.state.songs.length > 0) {
            return this.state.songs.map((item, index) => {
                const { id, title, length, numberOnAlbum, albumID } = item
                return (
                    <tr key={index}>
                        <td>{numberOnAlbum}</td>
                        <td><Link to={{ pathname: `/Song/${id}` }}>{title}</Link>  </td>                  
                        <td>{secondsToHms(length)}</td>
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
                            <td></td>
                            <td>title</td>
                            <td>length</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTableData()}
                    </tbody>
                </Table>
            )
        }
        else {
            return <h2> No songs found </h2>
        }
    }


    render() {
        return (
            <Container fluid>
                <Row>
                    <Col>
                        <img src={this.state.album.imageFilePath} />
                    </Col>
                    <Col>
                        <h2>{this.state.album.title} released in {this.state.album.releaseYear}</h2>
                    </Col>
                </Row>
                <br />
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