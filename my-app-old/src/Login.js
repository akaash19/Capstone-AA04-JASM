import React from 'react';
import './styles/Home.css';
import {Link} from "react-router-dom";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import './styles/Login.css'


export default class Login extends React.Component {


  render() {
      return(
          <div>
            <head>

            </head>
            <body>
            <div className="Home">
              <header className="Header">
                <Link to='/login' style={{ textDecoration: 'none', color: 'lightgrey'}}>
                  <text className='SiteTitle'>FAM-BOOK</text>
                </Link>
                <LoginForm/>
              </header>
            </div>
            <div className="mainContent">
              <div className={"SiteInfo"}>
                <h1>Connect with your family</h1>
                <h3>Random Text</h3>
                <p>
                  Random Content. Random Content. Random Content. Random Content. Random Content. Random Content
                  . Random Content. Random Content. Random Content. Random Content. Random Content. Random Content
                  . Random Content. Random Content. Random Content. Random Content. Random Content. Random Content
                </p>
                <h3>Random Text</h3>
                <ul>
                  <li>Random point</li>
                  <li>Random point</li>
                  <li>Random point</li>
                  <li>Random point</li>
                  <li>Random point</li>
                </ul>
              </div>
              <SignUpForm/>
            </div>
            </body>


          </div>
      )
  }
}