import React from 'react';
import fakeJSONData from '../assets/MOCK_DATA'
import CreatePost from "./CreatePost";

export default class FeedList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: true
    };
    this.createPost = this.createPost.bind(this)
    this.createPostList = this.createPostList.bind(this)
    this.addPost = this.addPost.bind(this)
  }

  componentDidMount() {
    this.setState({
      posts: fakeJSONData,
      loading: false
    })
  }

  addPost(title, body, family) {
    let tempPosts = this.state.posts;
    tempPosts.unshift({
      first_name: this.props.firstName,
      last_name: this.props.lastName,
      title: title,
      content: body
    });
    this.setState({
      posts: tempPosts
    })
  }

  createPost(post) {
    let imageNum = Math.floor((Math.random() * 4) + 1);
    let image = (<img className={"ProfilePic"} src={require("../assets/ProfilePic" + imageNum + ".jpg")}/>);
    let imageNum2 = imageNum + 1;
    let image2 = (<img className={"ProfilePic"} src={require("../assets/AndersonReunion.jpg")}/>);
    let postImage = ""
    if(post.image != "") {
      postImage = (<img className={"feedImage"} src={require("../assets/" + post.image)}/>)
    } 

    return(
        <div className={"Post"}>
          <div className={"PostHeader"}>
            <div className={"PostDest"}>
              <h2 className={"PostAuthor"}>{post.first_name + " " + post.last_name }</h2>
              {image}
              <h2 className={"Arrow"}>{" → "}</h2>
              <h2 className={"PostAuthor"}> {post.last_name + " Family"}</h2>
              {image2}
            </div>
            <h1 className={"PostTitle"}>{post.title}</h1>
          </div>
          <div className={"PostBody"}>
            <p>{post.content}</p>
            {postImage}
          </div>
        </div>
    )
  }

  createPostList() {
    let posts = this.state.posts;
    let postList = posts.map((post)=> {
      return (
          this.createPost(post)
      );
    })
    return( <div className={"PostList"}>
          {postList}
        </div>
    )
  }

  render() {
    if(this.state.loading) {
      return (
          <div>
            LOADING
          </div>
      )
    } else {
      return (
          <div className="FeedList">
            <CreatePost addPost={this.addPost}/>
            {this.createPostList()}
          </div>
      )
    }
  }
}