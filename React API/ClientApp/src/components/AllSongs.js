import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import { Row, Col, Container} from 'reactstrap';
import './Song.css';


export class AllSongs extends Component {
    static displayName = AllSongs.name;

    constructor(props) {
        super(props);
        this.state = {
            items: null,
            isLoaded: false,
        };
    }

    componentDidMount() {
        fetch("https://localhost:44325/api/Song")
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
            const { id, title, length, numberOnAlbum } = item
            return (
                <tr key={index}>
                    <td>{numberOnAlbum}</td>
                    <td><Link to={{ pathname: `/Song/${id}` }}>{title}</Link></td>
                    <td>{secondsToHms(length)}</td>
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
                            <Link to={{ pathname: `/Song/${item.id}` }}><img src="https://media.nu.nl/m/il5xbunadizj_wd640.jpeg" alt=""/> </Link>
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
                    <h1 id='title'>All Songs</h1>
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
                </div>
            )
        }
    }
}


function secondsToHms(d) {
    d = Number(d);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var mDisplay = m > 0 ? m + (m === 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s === 1 ? " second" : " seconds") : "";
    return mDisplay + sDisplay;
}