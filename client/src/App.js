import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import Home from './Home';
import Groups from './Groups'
import MyProfile from './MyProfile';
import Login from './Login';
import GroupView from './GroupView';

export default class App extends React.Component {
  render() {
    return (
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/groups' component={Groups} />
          <Route exact path='/groupview' component={GroupView} />
          <Route exact path='/myprofile' component={MyProfile} />
        </Switch>
    );
  }
}