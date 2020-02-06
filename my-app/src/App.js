import React from 'react';
import { BrowserRouter as Switch, Route, Link} from 'react-router-dom';
import Home from './Home';
import Experience from './Experience'
import About from './About';
import ContactMe from './ContactMe';

export default class App extends React.Component {
  render() {
    return (
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/experience' component={Experience} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={ContactMe} />
        </Switch>
    );
  }
}