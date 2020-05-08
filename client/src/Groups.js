import React from 'react';
import './styles/Home.css';
import Header from './components/Header'
import GmaMunkley from './assets/AndersonOldGrandma.jpg';
import Friends from './assets/FeedPic7.jpg';
import Wedding from './assets/AndersonWedding.jpg'
import Group1 from './assets/Group1.jpg'
import Group2 from './assets/Group2.jpg'
import Group3 from './assets/Group3.jpg'




export default class Groups extends React.Component {
  render() {
    return (
      <div id="Page">
        <body>
          <div className="Home">
            <Header firstName={"Leyla"} lastName={"Munkley"} currentTab={"groups"}/>
          </div>
          <div className="mainContent">
            <div className={"groupCardContainer"}>
              <div className={"groupCard"}>
                <a href="/groupview" className={"groupCardContent"}>
                  <img id = "groupCardPic" src={GmaMunkley} alt="profilePicture"/>
                  <h1> Munkley Family </h1>
                </a>
              </div>

              <div className={"groupCard"}>
                <a href="/groupview" className={"groupCardContent"}>
                  <img id = "groupCardPic" src={Friends} alt="profilePicture"/>
                  <h1> Day 1s </h1>
                </a>
              </div>

              <div className={"groupCard"}>
                <a href="/groupview" className={"groupCardContent"}>
                  <img id = "groupCardPic" src={Wedding} alt="profilePicture"/>
                  <h1> Mike's Wedding group </h1>
                </a>
              </div>

              <div className={"groupCard"}>
                <a href="/groupview" className={"groupCardContent"}>
                  <img id = "groupCardPic" src={Group1} alt="profilePicture"/>
                  <h1> Class of 2020 Friends </h1>
                </a>
              </div>

              <div className={"groupCard"}>
                <a href="/groupview" className={"groupCardContent"}>
                  <img id = "groupCardPic" src={Group2} alt="profilePicture"/>
                  <h1> The Walters </h1>
                </a>
              </div>

              <div className={"groupCard"}>
                <a href="/groupview" className={"groupCardContent"}>
                  <img id = "groupCardPic" src={Group3} alt="profilePicture"/>
                  <h1> Eastside Church </h1>
                </a>
              </div>
            </div>
          </div>
        </body>

      </div>
    )
  }
}