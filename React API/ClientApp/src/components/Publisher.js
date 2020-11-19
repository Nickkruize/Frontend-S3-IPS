import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { Row, Col, Container } from 'reactstrap';
import './Song.css';
import { Link } from 'react-router-dom';

export class Publisher extends Component {
    static displayName = Publisher.name;

    constructor(props) {
        super(props);
        this.state = {
            publisher: null,
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
                this.setState({ publisher: res.data });
                this.setState({ Games: this.state.publisher.games });
                console.log(this.state.Games);
            }).catch(error => {
                console.error(error);
                this.setState({ error: error })
            });
    }


    renderData() {
        return (
            <Container fluid>
                <Row>
                    {this.state.Games.map((item, index) => (
                        <Col xs={4} key={index}>
                            <Link to={{ pathname: `/Game/${item.id}` }}><img src={item.image} alt=""/>  </Link>
                            {item.title}
                        </Col>
                    ))}
                </Row>
            </Container>
        )
    }

    render() {
        if (!this.state.publisher) {
            return <div />
        }
        return (
            <div>
                <h2 key={this.state.publisher.id}>{this.state.publisher.name}</h2>
                {this.renderData()}
            </div>
        )
    }
}
