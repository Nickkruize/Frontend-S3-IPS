import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { Layout } from './Layout';
import { Home } from './Home';
import {Login} from './Login';
import {UserManager} from './UserManager';
import {AccessDenied} from './AccessDenied';
import {Register} from './Register';
import {NoMatch} from './NoMatch';
import './css/App.css';

export default class App extends Component{
 static displayname = App.name

  render(){
    return (  
      <Layout>
      <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/Login' component={Login}/>
      <Route exact path="/UserManagement" component={UserManager}/>
      <Route exact path="/Register" component={Register}/>
      <Route exact path="/Denied" component={AccessDenied}/>
      <Route component={NoMatch} />
      </Switch>
      </Layout>
  );
  }
}

