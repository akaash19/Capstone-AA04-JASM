import React from 'react';
import {Link} from "react-router-dom";
import Header from './components/Header'
import GroupHeader from './components/GroupHeader'
import GoogleMap from './components/Map'
import SideBar from './components/SideBar'
import './styles/MapView.css';
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';


export default class MapView extends React.Component {


  render() {
    
    return (

        <body>
        <div className="Home">
          <Header firstName={"Leyla"} lastName={"Munkley"}/>
        </div>
        <div className="Home">
          <GroupHeader currentTab={"mapview"}/>
        </div>
        <div className={"mapPageContent"}>
          <div className={"mapAndSidebar"}>
            <div id="sideBar">
              <SideBar/>
            </div>
            <div id="page-wrap">
              <GoogleMap/>
            </div>
          </div>
        </div>
        </body>

    
    )
  }
}