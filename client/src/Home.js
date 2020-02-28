import React from 'react';
import './styles/Home.css';
import Header from './components/Header'
import FeedList from "./components/FeedList";

export default class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log(this.props)
  }

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
            <div className="Feed">
              <FeedList/>
            </div>
          </div>
        </body>

      </div>
    )
  }
}