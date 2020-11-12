import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Col, Container} from 'reactstrap';
import axios from 'axios';
import './Song.css';

export class Game extends Component {
    static displayName = Game.name;

    constructor(props) {
        super(props);
        this.state = {
            game: JSON,
            error: Error
        }
    }

    componentDidMount() {

        const id = this.props.match.params.id;

        const api = axios.create({
            baseURL: "https://localhost:44367/api/Games"
        })

        api.get('/' + id,)
            .then(res => {
                console.log(res.data)
                this.setState({ game: res.data })
            }).catch(error => {
                console.error(error);
                this.setState({ error: error })
            });
    }



    render() {
        return (
            <Container fluid>
                <Row>
                    <Col xs={4}>
                        <img src={this.state.game.image} />
                    </Col>
                    <Col>
                        <h2>{this.state.game.title} released in {this.state.game.releaseYear}</h2>
                    </Col>
                </Row>
            </Container>
        )
    }
}