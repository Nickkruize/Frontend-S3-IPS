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
import { Game } from './components/Game';
import { AllGames } from './components/AllGames';
import { Publisher } from './components/Publisher';
import { AllPublishers } from './components/AllPublishers';
import { Genre } from './components/Genre';
import { AllGenres } from './components/AllGenres';
import { Register } from './components/Register';
import { Login } from './components/Login';
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
                <Route path='/Album' component={Album} />
                <Route path='/Song/:songid' component={Song} />
                <Route path='/counter' component={Counter} />
                <Route path='/fetch-data' component={FetchData} />
                <Route path='/Register' component={Register} />
                <Route path='/Login' component={Login} />

                <Route path='/AllGames' component={AllGames} />
                <Route path='/AllPublishers' component={AllPublishers} />
                <Route path='/AllGenres' component={AllGenres} />
                <Route path='/Game/:id' component={Game} />
                <Route path='/Publisher/:id' component={Publisher} />
                <Route path='/Genre/:id' component={Genre} />
            </Layout>
        );
    }
}
