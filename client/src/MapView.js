import React from 'react';
import {Link} from "react-router-dom";
import Header from './components/Header'
import GroupHeader from './components/GroupHeader'
import GoogleMap from './components/Map'
import SideBar from './components/SideBar'
import './styles/MapView.css';

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
          <div id="sideBar">
         <SideBar/>
         
         <div id="page-wrap">
        <h1>Welcome to Map View
        </h1>
         <GoogleMap/>
        </div>
          </div>
         
        </body>

    
    )
  }
}