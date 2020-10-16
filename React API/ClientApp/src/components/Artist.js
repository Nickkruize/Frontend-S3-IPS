import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { get } from 'jquery';

export class Artist extends Component {
    static displayName = Artist.name;

    constructor(props) {
        super(props);
        this.state = {
            artist: Artist,
            error: Error
        }
    }

    componentDidMount() {

        const id = this.props.match.params.id;

        const api = axios.create({
            baseURL: "https://localhost:44325/api/Artist"
        })

        api.get('/' + id,)
            .then(res => {
                console.log(res.data)
                this.setState({ artist: res.data })
            }).catch(error => {
                console.error(error);
                this.setState({ error: error })
            });
    }



    render() {
        return (
            <div>
                <h2 key={this.state.artist.id}>{this.state.artist.name}</h2>
            </div>
            )
        }
}

//{ this.state.artist.albums }.forEach(
//    <h3>album.title</h3>
//)