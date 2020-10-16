import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { get } from 'jquery';

export class Song extends Component {
    static displayName = Song.name;

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        //const { songid } = this.props.location.state

        const id = this.props.match.params.songid;

        const api = axios.create({
            baseURL: "https://localhost:44325/api/Song"
        })

        api.get('/' + id,)
            .then(res => {
                console.log(res.data)
                this.setState({ song: res.data })
            }).catch(error => {
                console.error(error);
                this.setState({ error: error })
            });
    }

    state = {
        song: Song,
        error: Error
    }

    render() {
        //if (this.state.error == null) {
        //    return (
        //        <h2 key={this.state.song.id}>{this.state.song.title}</h2>
        //    )
        //}
        //else {
            return (
                <h2 key={this.state.song.id}>{this.state.song.title}</h2>
            )
        //}

    }
}