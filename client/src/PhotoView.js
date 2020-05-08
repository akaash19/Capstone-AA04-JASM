import React from 'react';
import Header from './components/Header'
import GroupHeader from './components/GroupHeader'
import AwesomeSlider from 'react-awesome-slider';
import fakeJSONData from './assets/MOCK_DATA_GROUP'
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import './styles/Home.css';
import Styles from "react-awesome-slider/src/styled/fold-out-animation/index.js";
import "./styles/Slider.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);



export default class PhotoView extends React.Component {
  constructor(props) {
    super(props)
    this.createPost = this.createPost.bind(this)
    this.createSliderWithImages = this.createSliderWithImages.bind(this)
    this.state = {
      posts: fakeJSONData,
      loading: true
    };
  }

  componentDidMount() {
    let posts = [];
    this.setState({
      loading: false
    })
  }

  createPost(post) {
    let image = ""
    if(post.image != "") {
      image = (<img className={"sliderImage"} src={require("./assets/" + post.image)}/>)
    }
    return(
      <div className={"sliderCard"}>
        <h3 className="vertical-timeline-element-title">{post.first_name + " " + post.last_name}</h3>
        {image}
        <h4 className="vertical-timeline-element-subtitle">{post.title}</h4>
      </div>
    )
  }

  createSliderWithImages() {
    let unfilteredPosts = this.state.posts;
    let posts = [];
    for(let i = 0; i < unfilteredPosts.length; i++) {
      if(unfilteredPosts[i].image !== "") {
        posts.push(unfilteredPosts[i])
      }
    }
    let postList = posts.map((post)=> {
        return (
            this.createPost(post)
        );
    })
    return(
          <AutoplaySlider
              cssModule={Styles}
              animation="foldOutAnimation"
              play={true}
              cancelOnInteraction={false}
              interval={6000}
              className={"aws-btn"}
          >
            {postList}
          </AutoplaySlider>
    )
  }

  render() {

    return (
        <div id="Page">
          <head>

          </head>
          <body>
          <div className="Home">
            <Header firstName={"Leyla"} lastName={"Munkley"}/>
          </div>
          <div>
            <GroupHeader currentTab={"photoview"}/>
          </div>
          {this.createSliderWithImages()}
          </body>

        </div>





    )
  }
}