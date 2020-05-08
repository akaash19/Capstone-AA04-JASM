import React from 'react';
import Header from './components/Header'
import FeedList from "./components/FeedList";
import './styles/Home.css';

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
            <Header firstName={"Leyla"} lastName={"Munkley"} currentTab={"home"}/>
          </div>
          <div className="mainContent">
            <div className="Feed">
              <FeedList firstName={"Seth"} lastName={"Anderson"}/>
            </div>
          </div>
        </body>

      </div>
    )
  }
}