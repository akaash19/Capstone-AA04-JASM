import React from 'react';
import { Button, Form} from "react-bootstrap";
import {Link} from "react-router-dom";


export default class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      username: "",
      password: ""
    }
  }

  handleUserNameChange(curVal) {
    this.setState({
      username: curVal
    })
  }

  handlePasswordChange(curVal) {
    this.setState({
      password: curVal
    })
  }

  render() {
    return (
        <div id={"LoginForm"}>
          <form onSubmit={this.onClickPlay}>
            <Form.Group controlId="text" bsSize="large" className={"FieldAndLabel"}>
              <Form.Label>Username</Form.Label>
              <Form.Control
                  autoFocus
                  type="text"
                  onChange={e => this.handleUserNameChange(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="text" bsSize="large" className={"FieldAndLabel"}>
              <Form.Label>Password</Form.Label>
              <Form.Control
                  autoFocus
                  type="password"
                  onChange={e => this.handlePasswordChange(e.target.value)}
              />
            </Form.Group>

            <Link to={{pathname: "/home",
              state:{
                username: this.state.username,
                password: this.state.password
              }
            }}
            >
              <Button block bsSize="large" type="submit">
                Login
              </Button>
            </Link>
          </form>
        </div>
    )
  }
}