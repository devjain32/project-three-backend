import React, { Component } from "react";
import { Link } from "react-router-dom";


class Register extends Component {
  render() {
    return (
      <div>
        This is the register. Click to go back to home
        <Link to="/">Click here</Link>
      </div>
    );
  }
}

export default Register;
