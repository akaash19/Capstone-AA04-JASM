import React, { Component, createRef } from 'react'
import {Link} from "react-router-dom";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
//98.35, 39.5



export class GoogleMap extends React.Component{
    render() {
        return (
        
          <Map 
            google={this.props.google}
             zoom={5}
            initialCenter={{
            lat: 34,
            lng: -98.35
            }} >
     
            <InfoWindow onClose={this.onInfoWindowClose}>
            </InfoWindow>
          </Map>
          
        );
      }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyDsXFIpTy7J14m-B6pzX3MPs5J_-y2Po3I")
  })(GoogleMap)