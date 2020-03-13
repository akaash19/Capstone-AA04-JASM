import React from 'react';
import './styles/Home.css';
import Header from './components/Header'
///import { BrowserRouter as NavLink } from "react-router-dom";
//import Swiper from "./components/Swiper.js";

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import GmaMunkley from './assets/AndersonOldGrandma.jpg';
import Friends from './assets/FeedPic7.jpg';


const slider = (
  <AwesomeSlider>
    <div><a href="/groupview"><img id = "profilePic" src={GmaMunkley} width="170" height="170" alt="profilePicture"/> </a>
                <h1> Anderson Family </h1> </div>
    <div><a href="/groupview"><img id = "profilePic" src={Friends} width="170" height="170" alt="profilePicture"/> </a>
                <h1> Day 1s </h1></div>
  </AwesomeSlider>
);




export default class Groups extends React.Component {
  render() {
    return (
      <div id="Page">
        <body>
          <div className="Home">
            <Header/>
          </div>
          <div className="mainContent">
         
          {slider}

          </div>
        </body>

      </div>
    )
  }
}