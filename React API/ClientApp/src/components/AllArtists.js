import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import { Row, Col, Container} from 'reactstrap';
import './Song.css';


export class AllArtists extends Component {
    static displayName = AllArtists.name;

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch("https://localhost:44325/api/Artist")
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
                        <Col xs={4}>
                            <Link to={{ pathname: `/Artist/${item.id}` }}><img src={item.imageFilePath} alt=""/> </Link>
                            <p>{item.name}</p>
                        </Col>
                    ))};
                </Row>
            </Container>
        )
    }


    render() {
        if (!this.state.items) {
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