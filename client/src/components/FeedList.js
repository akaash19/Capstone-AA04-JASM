import React from 'react';
import Papa from 'papaparse';
import fakeJSONData from '../assets/MOCK_DATA'

export default class FeedList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      loading: true
    };
    this.createPost = this.createPost.bind(this)
    this.createPostList = this.createPostList.bind(this)
  }

  componentDidMount() {
    this.setState({
      posts: fakeJSONData,
      loading: false
    })
  }


  createPost(post) {
    return(
        <div className={"Post"}>
          <div className={"PostHeader"}>
            <div className={"PostDest"}>
              <h2 className={"PostAuthor"}>{post.first_name + " " + post.last_name }</h2>
              <h2 className={"PostAuthor"}>{" → "}</h2>
              <h2 className={"PostAuthor"}> {post.last_name + " Family"}</h2>
            </div>
            <h1 className={"PostTitle"}>{post.title}</h1>
          </div>
          <div className={"PostBody"}>
            {post.content}
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
            {this.createPostList()}
          </div>
      )
    }
  }
}