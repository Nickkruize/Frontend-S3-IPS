import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { get } from 'jquery';

export class Album extends Component {
    static displayName = Album.name;

    constructor(props) {
        super(props);
        this.state = {
            album: Album,
            error: Error
        }
    }

    componentDidMount() {

        const id = this.props.match.params.id;

        const api = axios.create({
            baseURL: "https://localhost:44325/api/Albums"
        })

        api.get('/' + id,)
            .then(res => {
                console.log(res.data)
                this.setState({ album: res.data })
            }).catch(error => {
                console.error(error);
                this.setState({ error: error })
            });
    }



    render() {
        return (
            <div>
                  <h2 key={this.state.album.id}>{this.state.album.title} released in {this.state.album.releaseYear}</h2>
            </div>
        )
    }
}

//{ this.state.artist.albums }.forEach(
//    <h3>album.title</h3>
//)