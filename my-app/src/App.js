import React from 'react';
import { BrowserRouter as Switch, Route, Link} from 'react-router-dom';
import Home from './Home';
import Groups from './Groups'
import Photos from './Photos';
import MyProfile from './MyProfile';
import Login from './Login';

export default class App extends React.Component {
  render() {
    return (
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/' component={Home} />
          <Route exact path='/groups' component={Groups} />
          <Route exact path='/photos' component={Photos} />
          <Route exact path='/myprofile' component={MyProfile} />
        </Switch>
    );
  }
}