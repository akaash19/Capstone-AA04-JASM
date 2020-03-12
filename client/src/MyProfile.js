import React from 'react';
import './styles/Home.css';
import Header from './components/Header';
import About from './components/about.js';
import Banner from './components/Banner.js';
import Contact from './components/Contact.js';
import Relationships from './components/relationships.js';

const profilePic = require('./assets/ProfilePic1.jpg');

export default class MyProfile extends React.Component {
  state = { 
    name: 'Leyla', 
    lastName: 'Munkley', 
    occupation: 'Software Engineer', 
    mother: 'Abigail Munkley', 
    father: 'Lewis Munkley', 
    comments: '4,832', 
  }; 
  render() {
    return (
      <div id="Page">
        <head>

        </head>
        <body>
          <div className="Home">
            <Header/>
          </div>
          <div className="mainContent">
          <Banner/>
          <br/>
          <About/>
          <br/>
         
          <br/>
          <Contact/>


          </div>
        </body>

      </div>
    )
  }
}