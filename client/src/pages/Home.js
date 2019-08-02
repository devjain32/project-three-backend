import React, { Component } from "react";
import { Link } from "react-router-dom";


class Home extends Component {
  // When this component mounts, grab the clothes with the _id of this.props.match.params.id
  // e.g. localhost:3000/clothes/599dcb67f0f16317844583fc

  render() {
    return (
      <div>
        Hello! Sign up! <br/>
        <Link to="/register">Click here</Link> <br/> 
        Hello! Log in! <br/>
        <Link to="/login">Click here</Link> <br/>
        Hello! Go to garden! <br/>
        <Link to="/garden">Click here</Link> <br/>

      </div>
    );
  }
}

export default Home;
