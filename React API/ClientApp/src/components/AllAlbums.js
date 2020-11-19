﻿import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Col, Container} from 'reactstrap';
import './Song.css';
import { Link } from 'react-router-dom';


export class AllAlbums extends Component {
    static displayName = AllAlbums.name;

    constructor(props) {
        super(props);
        this.state = {
            items: null,
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch("https://localhost:44325/api/Albums")
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
            const { id, title, artistID, releaseYear } = item
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{artistID}</td>
                    <td>{title}</td>
                    <td>{releaseYear}</td>
                </tr>
            )
        })
    }

    renderData() {
        return (
            <Container fluid>
                <Row>
                    {this.state.items.map((item) => (
                        <Col xs={4}>
                            <Link to={{ pathname: `/Album/${item.id}` }}><img src={item.imageFilePath} alt="" /> </Link>
                            <p>{item.title}</p>
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

            //return (
            //    <div>
            //        <h1 id='title'>All Albums</h1>
            //        <Table stripid bordered hover>
            //            <thead>
            //                <tr>
            //                    <td>id</td>
            //                    <td>artistID</td>
            //                    <td>title</td>
            //                    <td>released in</td>
            //                </tr>
            //            </thead>
            //            <tbody>
            //                {this.renderTableData()}
            //            </tbody>
            //        </Table>
            //    </div>
            //)