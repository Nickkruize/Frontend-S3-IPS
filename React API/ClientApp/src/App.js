import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { AllSongs } from './components/AllSongs';
import { Song } from './components/Song';
import { AllArtists } from './components/AllArtists';
import { Artist } from './components/Artist';
import { AllAlbums } from './components/AllAlbums';
import { Album } from './components/Album';


import './custom.css'

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/AllSongs' component={AllSongs} />
                <Route path='/AllAlbums' component={AllAlbums} />
                <Route path='/AllArtists' component={AllArtists} />
                <Route path='/Artist/:id' component={Artist} />
                <Route path='/Album/:id' component={Album} />
                <Route path='/Song/:songid' component={Song} />
                <Route path='/counter' component={Counter} />
                <Route path='/fetch-data' component={FetchData} />
            </Layout>
        );
    }
}
