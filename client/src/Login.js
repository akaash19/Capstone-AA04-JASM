import React from 'react';
import './styles/Home.css';
import {Link} from "react-router-dom";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import './styles/Login.css'
import LoginHeader from './components/LoginHeader.js';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import img from './assets/Family-Quotes-1.jpg';
import Footer from './components/FooterPage';

export default class Login extends React.Component {


  render() {
      return(
          <div>
            <head>

            </head>
            <body>
            <div className="Home">
              <header className="Header">
                <Link to='/' style={{ textDecoration: 'none', color: 'rgb(255, 123, 0)'}}>
                  <text className='SiteTitle'>GroupConnect</text>
                </Link>
                <LoginForm/>
              </header>
              <LoginHeader/>
            </div>
            <div className="mainContent">
              <div className={"SiteInfo"}>
                <h1 className="Welcome" style={{color: 'rgb(255, 123, 0)'}}>Welcome to GroupConnect!</h1>
                <br></br>
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
        style={{backgroundColor: '#175852' }}>
        <p className="front-flip" style={{color: 'white'}}>
          We value privacy just as much as you.
        </p>
    </FrontSide>
    <BackSide
      style={{backgroundColor: 'white' }}>
      Add picture later
    </BackSide>
  </Flippy>
  
  
}
<br></br>
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
      style={{ backgroundColor: 'rgb(255, 123, 0)'}}>
        <p className="front-flip" style={{color: 'white'}}>
      Share memories, forever.
      </p>
    </FrontSide>
    <BackSide
      style={{backgroundColor: 'white' }}>
      Add picture later
    </BackSide>
  </Flippy>
  
}
<br></br>
<br></br>
<br></br>
<hr/>
          <Footer/>
              </div>
              <SignUpForm/>
            </div>
            </body>
          </div>
      )
  }
}