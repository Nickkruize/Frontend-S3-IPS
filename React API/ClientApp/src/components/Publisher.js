import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { get } from 'jquery';
import { Row, Col, Container, Form } from 'reactstrap';
import './Song.css';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Bootstrap from 'bootstrap';

export class Publisher extends Component {
    static displayName = Publisher.name;

    constructor(props) {
        super(props);
        this.state = {
            publisher: JSON,
            Games: [],
            error: Error
        }
    }

    componentDidMount() {

        const id = this.props.match.params.id;

        const api = axios.create({
            baseURL: "https://localhost:44367/api/Publishers"
        })

        api.get('/' + id,)
            .then(res => {
                console.log(res.data)
                this.setState({ publisher: res.data })
                this.setState({ Games: res.data.games })
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
        if (this.state.Games.length > 0) {
            return this.state.Games.map((item, index) => {
                const { id, title, releaseYear} = item
                return (
                    <tr key={index}>
                        <td>{id}</td>
                        <td><Link to={{ pathname: `/Game/${id}` }}>{title}</Link>  </td>
                        <td>{releaseYear}</td>
                    </tr>
                )
            })
        }
        else {
            return null
        }
    }

    CheckForGames() {
        if (this.renderTableData() != null) {
            return (
                <Table stripid bordered hover>
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>name</td>
                            <td>foundingYear</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTableData()}
                    </tbody>
                </Table>
            )
        }
        else {
            return <h2> No Games found </h2>
        }
    }


    render() {
        return (
            <Container fluid>
                <Row>
                    <Col xs={3}>
                        <img src={this.state.publisher.logo} />
                    </Col>
                    <Col>
                        <h2>{this.state.publisher.name} founded in {this.state.publisher.foundingYear}</h2>
                    </Col>
                </Row>
                <br />
                <div>
                    {this.CheckForGames()}
                </div>
            </Container>
        )
    }
}