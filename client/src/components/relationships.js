import React from 'react';
import '../styles/ProfilePage.css';
import GmaMunkley from '../assets/AndersonOldGrandma.jpg';
import Friends from '../assets/FeedPic7.jpg';
import {Link} from "react-router-dom";

class Relationships extends React.Component{
    render(){
        return(
            <section className="projects">
            <h1 id='Portfolio'>Groups You're In:</h1>
            <p>These are the groups you are currently a part of:</p>
            
            <div className="test">

              <div className="container-2">
              <a href="/groupview"><img id = "profilePic" src={GmaMunkley} width="150" height="180" alt="profilePicture"/> </a>
                <h1> Munkley's Family </h1>
                <button>Leave Group</button>
              </div>

              <div className="container-2">
              <a href="/groupview"><img id = "profilePic" src={Friends} width="230" height="180" alt="profilePicture"/> </a>
                <h1> Day 1's </h1>
                <button>Leave Group</button>
              </div>
              </div>

                 
      </section>
        )
    }
}

export default Relationships