import React from 'react';
import './styles/Home.css';
import Header from './components/Header'

export default class Home extends React.Component {
  render() {
    return (
      <div id="Page">
        <head>

        </head>
        <body>
          <div className="Home">
            <Header/>
          </div>
          <div id='Landing'>
            Landing page
          </div>
        </body>

      </div>
    )
  }
}