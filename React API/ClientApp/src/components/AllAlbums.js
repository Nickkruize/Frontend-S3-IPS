import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.css';


export class AllAlbums extends Component {
    static displayName = AllAlbums.name;

    constructor(props) {
        super(props);
        this.state = {
            items: [],
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


    render() {

        var { isLoaded, items } = this.state;

        if (!isLoaded) {
            return <div>Loading..</div>
        }

        else {
            return (
                <div>
                    <h1 id='title'>All Albums</h1>
                    <Table stripid bordered hover>
                        <thead>
                            <tr>
                                <td>id</td>
                                <td>artistID</td>
                                <td>title</td>
                                <td>released in</td>
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