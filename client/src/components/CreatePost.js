import React from 'react';
import { Button, Form} from "react-bootstrap";

export default class CreatePost extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      postTitle: "",
      postBody: "",
      familyChosen: ""
    }
    this.addPost = this.addPost.bind(this)
  }

  addPost() {
    console.log("HELLO")
    this.props.addPost(this.state.postTitle, this.state.postBody, "")
    this.setState({
      postTitle: "",
      postBody: "",
      familyChosen: ""
    })
  }

  render() {
    return (
      <div className={'CreatePost Post'}>
          <div className={'CreatePostTitleAndBody'}>
            <Form.Group controlId="text" bsSize="large">
              <Form.Control
                  className={'CreatePostTitle'}
                  autoFocus
                  type="text"
                  placeholder={"What is this post about?"}
                  onChange={e => this.setState({postTitle: e.target.value})}
                  value={this.state.postTitle}
              />
            </Form.Group>

            <Form.Group controlId="text" bsSize="large">
              <Form.Control
                  className={'CreatePostBody'}
                  autoFocus
                  as={"textarea"}
                  rows={"6"}
                  placeholder={"What do you want to share?"}
                  onChange={e => this.setState({postBody: e.target.value})}
                  value={this.state.postBody}
              />
            </Form.Group>
           </div>

          <div className={"CreatePostSelectAndSubmit"}>
            <Form.Group className={"GroupSelect"}>
              <Form.Label>Where do you want to post?</Form.Label>
              <Form.Control as="select"
              >
                <option>Munkley Family</option>
                <option>Anderson Family</option>
                <option>Cedar Moore High School</option>
                <option>Hoyt Family</option>
                <option>Tennis Club 1998</option>
              </Form.Control>
            </Form.Group>
            <input type="file" />
            <button className={"CreatePostButton"} onClick={() => this.addPost()}>
              Create
            </button>
          </div>
      </div>
    )
  }
}