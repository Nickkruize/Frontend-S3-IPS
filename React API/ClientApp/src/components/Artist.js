import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { get } from 'jquery';
import { Album } from './Album';
import { Row, Col, Container, Form } from 'reactstrap';
import './Song.css';
import { Link } from 'react-router-dom';

export class Artist extends Component {
    static displayName = Artist.name;

    constructor(props) {
        super(props);
        this.state = {
            artist: [],
            albums : [],
            error: Error
        }
    }

    componentDidMount() {

        const id = this.props.match.params.id;

        const api = axios.create({
            baseURL: "https://localhost:44325/api/Artist"
        })

        api.get('/' + id,)
            .then(res => {
                console.log(res.data)
                this.setState({ artist: res.data })
                this.setState({ albums: res.data.albums })
            }).catch(error => {
                console.error(error);
                this.setState({ error: error })
            });
    }


    renderData() {
        return (
            <Container fluid>
                <Row>
                    {this.state.albums.map((item) => (
                        <Col xs={4}>
                            <Link to={{ pathname: `/Album/${item.id}` }}><img src={item.imageFilePath} /> </Link>
                            <p>{item.title}</p>
                        </Col>
                    ))};
                </Row>
            </Container>
        )
    }

    render() {
        return (
            <div>
                <h2 key={this.state.artist.id}>{this.state.artist.name}</h2>
                {this.renderData()}
            </div>
            )
    }
}

//{ this.state.artist.albums }.forEach(
//    <h3>album.title</h3>
//)

