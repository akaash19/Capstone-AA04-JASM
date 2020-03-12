import React from 'react';
import '../styles/ProfilePage.css';
import GmaMunkley from '../assets/AndersonOldGrandma.jpg';
import Friends from '../assets/FeedPic7.jpg';

class Relationships extends React.Component{
    render(){
        return(
            <section className="projects">
            <h1 id='Portfolio'>Groups You are in!</h1>
            <p>this is a list of the groups you are currently in:</p>
            
            <div className="test">

              <div className="container-2">
              <a href="#home"><img id = "profilePic" src={GmaMunkley} width="170" height="170" alt="profilePicture"/> </a>
                <h1> Abigail Munkley's Family </h1>
                <button>Leave Group</button>
              </div>

              <div className="container-2">
              <a href="#home"><img id = "profilePic" src={Friends} width="170" height="170" alt="profilePicture"/> </a>
                <h1> Day 1s </h1>
                <button>Leave Group</button>
              </div>
              </div>

                 
      </section>
        )
    }
}

export default Relationships