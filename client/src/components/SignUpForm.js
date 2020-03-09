import React from 'react';
import { Button, Form} from "react-bootstrap";
import {Link} from "react-router-dom";


export default class SignUpForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      email: "",
      firstName: "",
      lastName: ""
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

  handleEmailChange(curVal) {
    this.setState({
      email: curVal
    })
  }

  handleFirstNameChange(curVal) {
    this.setState({
      firstName: curVal
    })
  }

  handleLastNameChange(curVal) {
    this.setState({
      lastName: curVal
    })
  }

  render() {
    return (
        <div id={"SignUpForm"}>
          <h1>Create a New Account</h1>
          <p>Begin saving your memories today.</p>
          <form onSubmit={this.onClickPlay}>
            <div id={"NameFields"}>
              <Form.Group controlId="text" className={"FieldAndLabel"}>
                <Form.Control
                    placeholder={"First Name"}
                    className={"Field"}
                    type="text"
                    onChange={e => this.handleFirstNameChange(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="text" bsSize="large" className={"FieldAndLabel"}>
                <Form.Control
                    placeholder={"Last Name"}
                    className={"Field"}
                    type="text"
                    onChange={e => this.handleLastNameChange(e.target.value)}
                />
              </Form.Group>
            </div>

            <Form.Group controlId="text" bsSize="large" className={"FieldAndLabel"}>
              <Form.Control
                  placeholder={"Email"}
                  className={"Field"}
                  type="email"
                  onChange={e => this.handleEmailChange(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="text" bsSize="large" className={"FieldAndLabel"}>
              <Form.Control
                  placeholder={"Username"}
                  className={"Field"}
                  type="text"
                  onChange={e => this.handleUserNameChange(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="text" bsSize="large" className={"FieldAndLabel"}>
              <Form.Control
                  placeholder={"Password"}
                  className={"Field"}
                  type="password"
                  onChange={e => this.handlePasswordChange(e.target.value)}
              />
            </Form.Group>

            <Link to={{pathname: "/home",
              state:{
                username: this.state.username,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName
              }
            }}
            >
              <Button block bsSize="large" type="submit">
                Submit
              </Button>
            </Link>
          </form>
        </div>
    )
  }
}