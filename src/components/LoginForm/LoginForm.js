import React, { Component } from "react"

import "./LoginForm.css"

class LoginForm extends Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      firstNameError: "",
      lastNameError: "",
      emailError: "",
      passwordError: ""
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  validate = () => {
    let firstNameError = ""
    let lastNameError = ""
    let emailError = ""
    let passwordError = ""

    if (!this.state.firstName) {
      firstNameError = "First name cannot be blank"
    }

    if (!this.state.lastName) {
      lastNameError = "First name cannot be blank"
    }

    if (!this.state.email.includes("@")) {
      emailError = "Invalid Email"
    }

    if (!this.state.password) {
      passwordError = "Password cannot be blank"
    }

    if (firstNameError || lastNameError || emailError || passwordError) {
      this.setState({ firstNameError, lastNameError, emailError, passwordError })
      return false
    }

    return true
  }

  handleClick = (event) => {
    event.preventDefault()
    const isValid = this.validate()
    if (isValid) {
      console.log(this.state)
      this.setState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        firstNameError: "",
        lastNameError: "",
        emailError: "",
        passwordError: ""
      })
    }

  }

  render() {
    return (
      <>
        <h1>Registration</h1>

        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
            <div className="error">{this.state.firstNameError}</div>
          </div>
          <div>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
            <div className="error">{this.state.lastNameError}</div>
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <div className="error">{this.state.emailError}</div>
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <div className="error">{this.state.passwordError}</div>
          </div>
          <button onClick={this.handleClick}>Submit</button>
        </form>
      </>
    )
  }
}

export default LoginForm