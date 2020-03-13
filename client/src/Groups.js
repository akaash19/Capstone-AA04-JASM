import React from 'react';
import './styles/Home.css';
import Header from './components/Header'
import SimpleSwiper from './components/Swiper.js'
export default class Groups extends React.Component {
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
            <SimpleSwiper/>
          </div>
        </body>

      </div>
    )
  }
}