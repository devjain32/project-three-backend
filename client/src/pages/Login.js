import React, { Component } from "react";
import { Link } from "react-router-dom";


class Login extends Component {
  render() {
    return (
      <div>
        This is the login. Click to go back to home
        <Link to="/">Click here</Link>
      </div>
    );
  }
}

export default Login;
