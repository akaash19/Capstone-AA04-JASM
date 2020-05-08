import React, { Component, createRef } from 'react'
import {Link} from "react-router-dom";
import {Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react';
import fakeJSONData from "../assets/MOCK_DATA_GROUP";
//98.35, 39.5
const style = {
  width: '100%',
  height: '100%'
}
const containerStyle = {
  position: 'absolute',
  width: '80%',
  height: '70%'
}



export class GoogleMap extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      posts: fakeJSONData,
      loading: true,
      activeMarker: {},
      selectedPlace: {},
      showingInfoWindow: false
    };
    this.createGoogleMapWithMarkers = this.createGoogleMapWithMarkers.bind(this)
    this.onMarkerClick = this.onMarkerClick.bind(this)
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      activeMarker: marker,
      selectedPlace: props,
      showingInfoWindow: true
    });
  };

  componentDidMount() {
    this.setState({
      loading: false
    })
  }
  onInfoWindowClose = () =>
      this.setState({
        activeMarker: null,
        showingInfoWindow: false
      });
  onMapClicked = () => {
    if (this.state.showingInfoWindow)
      this.setState({
        activeMarker: null,
        showingInfoWindow: false
      });
  };
  createGoogleMapWithMarkers() {
    let unfilteredPosts = this.state.posts;
    let posts = [];
    for(let i = 0; i < unfilteredPosts.length; i++) {
      if(unfilteredPosts[i].location.lat !== "") {
        posts.push(unfilteredPosts[i])
      }
    }
    let postMarkers = posts.map((post)=> {
      return (
          this.createPostMarker(post)
      );
    })
    let image = "";
    if(this.state.selectedPlace.img != undefined) {
      console.log(this.state.selectedPlace)
      image = <img className={"mapImage"} src={require("../assets/" + this.state.selectedPlace.img)}/>
    }
    return(
        <Map
            containerStyle={containerStyle}
            style={style}
            google={this.props.google}
            zoom={3}
            onClick={this.onMapClicked}
            initialCenter={{
              lat: 34,
              lng: -98.35
            }} >
          {postMarkers}
          <InfoWindow
              marker={this.state.activeMarker}
              onClose={this.onInfoWindowClose}
              visible={this.state.showingInfoWindow}>
            <div>
              <h3>{this.state.selectedPlace.name}</h3>
              {image}
            </div>
          </InfoWindow>

        </Map>
    )
  }



  createPostMarker(post) {
    return(
        <Marker
            name={post.title}
            title={post.title}
            img={post.image}
            position={{lat: post.location.lat, lng: post.location.long}}
            onClick={this.onMarkerClick}>
          <InfoWindow
              marker={this.state.activeMarker}
              onClose={this.onInfoWindowClose}
              visible={true}>
            >
            <div>
              <h1>{post.title}</h1>
            </div>
          </InfoWindow>
        </Marker>
    )
  }

  render() {
      return (
          <div>
            {this.createGoogleMapWithMarkers()}
          </div>
      );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyDsXFIpTy7J14m-B6pzX3MPs5J_-y2Po3I")
  })(GoogleMap)