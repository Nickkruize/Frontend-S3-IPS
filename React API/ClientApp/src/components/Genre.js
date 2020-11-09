import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { get } from 'jquery';
import { Album } from './Album';
import { Row, Col, Container, Form } from 'reactstrap';
import './Song.css';
import { Link } from 'react-router-dom';

export class Genre extends Component {
    static displayName = Genre.name;

    constructor(props) {
        super(props);
        this.state = {
            Genre: [],
            Games: [],
            error: Error
        }
    }

    componentDidMount() {

        const id = this.props.match.params.id;

        const api = axios.create({
            baseURL: "https://localhost:44367/api/Genres"
        })

        api.get('/' + id,)
            .then(res => {
                console.log(res.data)
                this.setState({ Genre: res.data })
                this.setState({ Games: res.data.gameGenres})
            }).catch(error => {
                console.error(error);
                this.setState({ error: error })
            });
    }


    renderData() {
        return (
            <Container fluid>
                <Row>
                    {this.state.Games.map((item) => (
                        <Col xs={4}>
                            <Link to={{ pathname: `/Game/${item.gameId}` }}> {item.gameId} </Link>
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
                <h2 key={this.state.Genre.id}>{this.state.Genre.name}</h2>
                {this.renderData()}
            </div>
        )
    }
}

//{ this.state.artist.albums }.forEach(
//    <h3>album.title</h3>
//)

