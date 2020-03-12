import React from 'react';
import './styles/Home.css';
import './styles/ProfilePage.css';
import Header from './components/Header';
import About from './components/about.js';
import Banner from './components/Banner.js';
import Contact from './components/Contact.js';
import Relationships from './components/relationships.js';

export default class MyProfile extends React.Component {
  render() {
    return (
      <div id="ProfilePage">
          <div className="Home">
            <Header/>
          </div>
          <Banner/>
          <br/>
          <About/>
          <br/>
          <hr/>
          <Relationships/>
          <br/>
          <hr/>
          <Contact/>


          </div>
    )
  }
}