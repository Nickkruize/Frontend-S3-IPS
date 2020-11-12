import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

export class Song extends Component {
    static displayName = Song.name;

    constructor(props) {
        super(props);
        this.state = {
            song: Song,
            error: Error
        }
    }

    componentDidMount() {

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



    render() {
            return (
                <h2 key={this.state.song.id}>{this.state.song.title}</h2>
            )
    }
}