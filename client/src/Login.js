import React from 'react';
import './styles/Home.css';
import {Link} from "react-router-dom";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import './styles/Login.css'
import Flippy, { FrontSide, BackSide } from 'react-flippy';

export default class Login extends React.Component {


  render() {
      return(
          <div>
            <head>

            </head>
            <body>
            <div className="Home">
              <header className="Header">
                <Link to='/' style={{ textDecoration: 'none', color: 'lightgrey'}}>
                  <text className='SiteTitle'>GroupConnect</text>
                </Link>
                <LoginForm/>
              </header>
            </div>
            <div className="mainContent">
              <div className={"SiteInfo"}>
                <h1>Welcome to GroupConnect!</h1>
                 {
    <Flippy
    flipOnHover={false} // default false
    flipOnClick={true} // default false
    flipDirection="horizontal" // horizontal or vertical
    ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
    // if you pass isFlipped prop component will be controlled component.
    // and other props, which will go to div
    style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
  >
    <FrontSide
      style={{
        Image: 'Family-Quotes-1.jpg',
      }}
    >
      Marco
    </FrontSide>
    <BackSide
      style={{ backgroundColor: '#175852'}}>
      Seth
    </BackSide>
    <FrontSide
      style={{
        Image: 'Family-Quotes-1.jpg',
      }}
    >
      Marco
    </FrontSide>
    <BackSide
      style={{ backgroundColor: '#175852'}}>
      Seth
    </BackSide>
  </Flippy>
  
}
              </div>
              <SignUpForm/>
            </div>
            </body>


          </div>
      )
  }
}