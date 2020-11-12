import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Col, Container} from 'reactstrap';
import './Song.css';
import { Link } from 'react-router-dom';


export class AllPublishers extends Component {
    static displayName = AllPublishers.name;

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch("https://localhost:44367/api/Publishers")
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
            const { id, name, foundingYear } = item
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{foundingYear}</td>
                </tr>
            )
        })
    }


    renderData() {
        return (
            <Container fluid>
                <Row>
                    {this.state.items.map((item) => (
                        <Col xs={3}>
                            <Link to={{ pathname: `/Publisher/${item.id}` }}><img src={item.logo} /> </Link>
                            <p>{item.name}</p>
                        </Col>
                    ))}
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