import HeaderButton from "./HeaderButton";
import React from 'react';
import {Link} from "react-router-dom";

export default class GroupHeader extends React.Component {
  constructor(props) {
    super(props);
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
          <header className="Header SubHeader">
              <div className="ButtonRow">
                  <HeaderButton placeholder='TimeLine' path='/groupview' active={this.renderWhetherActive("timeline")}/>
                  <HeaderButton placeholder='Map View' path='/mapview' active={this.renderWhetherActive("mapview")}/>
                  <HeaderButton placeholder='Photo View' path='/photoview' active={this.renderWhetherActive("photoview")}/>
              </div>
          </header>
      )
  }
}