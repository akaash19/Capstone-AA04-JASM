import HeaderButton from "./HeaderButton";
import React from 'react';
import {Link} from "react-router-dom";

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.renderProfilePlaceholder = this.renderProfilePlaceholder.bind(this)
  }

  renderProfilePlaceholder() {
    if(this.props.firstName !== undefined || this.props.lastName !== undefined) {
      return this.props.firstName + " " + this.props.lastName
    } else {
      return "My Profile"
    }
  }

  renderWhetherActive(tab) {
    if(this.props.currentTab === tab) {
      return true;
    } else {
      return false;
    }
  }

  render() {
      return (
          <header className="Header">
              <Link to='/home' style={{ textDecoration: 'none', color:'rgb(255, 123, 0)'}}>
                  <text className='SiteTitle'>GroupConnect</text>
              </Link>
              <div className="ButtonRow">
                  <HeaderButton placeholder='Recent Posts' path='/home' active={this.renderWhetherActive("home")}/>
                  <HeaderButton placeholder='Groups' path='/groups' active={this.renderWhetherActive("groups")}/>
                  <HeaderButton placeholder={this.renderProfilePlaceholder()} path='/myprofile' active={this.renderWhetherActive("profile")}/>
              </div>
          </header>
      )
  }
}

