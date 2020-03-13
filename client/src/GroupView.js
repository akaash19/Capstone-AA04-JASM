import React from 'react';
import './styles/Home.css';
import Header from './components/Header'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import fakeJSONData from './assets/MOCK_DATA_GROUP'

export default class GroupView extends React.Component {
  constructor(props) {
    super(props)
    this.createPost = this.createPost.bind(this)
    this.createPostList = this.createPostList.bind(this)
    this.state = {
      posts: [],
      loading: true
    };
  }

  componentDidMount() {
    this.setState({
      posts: fakeJSONData,
      loading: false
    })
  }

  createPost(post) {
    let image = ""
    if(post.image != "") {
      image = (<img className={"timelineImage"} src={require("./assets/" + post.image)}/>)
    }
    return(
          <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date={post.time_created}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={null}
          >
            <h3 className="vertical-timeline-element-title">{post.first_name + " " + post.last_name}</h3>
            {image}
            <h4 className="vertical-timeline-element-subtitle">{post.title}</h4>
            <p>
              {post.description}
            </p>
          </VerticalTimelineElement>
    )
  }

  createPostList() {
    let posts = this.state.posts.reverse();
    let postList = posts.map((post)=> {
      return (
          this.createPost(post)
      );
    })
    return(
        <div className="mainContent">

          {
            // Main element to hold timeline
          }
          <VerticalTimeline>

            {
              // Title for the family
            }
            <h1> Anderson Family </h1>


            {
              // This is the element I want to dynamically create and fill in with parameters
            }
            {postList}


          </VerticalTimeline>

        </div>
    )
  }


  render() {
    return (
      <div id="Page">
      <head>

      </head>
      <body>
        <div className="Home">
          <Header/>
        </div>
        {this.createPostList()}
      </body>

    </div>

      

    )
  }
}