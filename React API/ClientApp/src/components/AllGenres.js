import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import { Row, Col, Container, Form } from 'reactstrap';
import './Song.css';


export class AllGenres extends Component {
    static displayName = AllGenres.name;

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch("https://localhost:44367/api/Genres")
            .then(res => res.json())
            .then(json => {
                this.setState(
                    {
                        isLoaded: true,
                        items: json,
                    })
            });
    }

    renderData() {
        return (
            <Container fluid>
                <Row>
                    {this.state.items.map((item) => (
                        <Col xs={2}>
                            <Link to={{ pathname: `/Genre/${item.id}` }}>{item.name} </Link>
                            <p>{item.name}</p>
                        </Col>
                    ))};
                </Row>
            </Container>
        )
    }


    render() {
        var { isLoaded, items } = this.state;

        if (!isLoaded) {
            return <div>Loading..</div>
        }

        else {
            return (

                <div>
                    {this.renderData()}
                </div>

            )
        }
    }
}