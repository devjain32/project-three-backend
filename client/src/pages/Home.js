import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import SearchForm from "../components/SearchForm";


class Home extends Component {
  state = {
    plants: []
  }
  
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    // Add call to get plants from database here
  }

  render() {
    return (
      <div>
        <Nav />
        <SearchForm 
        message={
        <div>  
        <h1>Learn. Grow. Share.</h1>
        <p>Welcome to Plant Pal, the gardening app that helps you learn more about plants and exchange gardening advice with other plant-owners in your area. Enter the name of any plant in the serach form below to find out more about that plant. Save a plant to your virtual garden to keep track of what plants you'd like to own or currently are growing. You can then write notes about the plants in your garden! Get started by searching below.</p>
        </div>}
        handleFormSubmit={this.handleFormSubmit}
        handleChange={this.handleChange}
        />
        {/* Hello! Sign up! <br/>
        <Link to="/register">Click here</Link> <br/> 
        Hello! Log in! <br/>
        <Link to="/login">Click here</Link> <br/>
        Hello! Go to garden! <br/>
        <Link to="/garden">Click here</Link> <br/> */}

      </div>
    );
  }
}

export default Home;
