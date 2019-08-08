import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import SearchForm from "../components/SearchForm";
import API from "../utils/API";
import SearchResult from "../components/SearchResult";


class Home extends Component {
  state = {
    search: "",
    plants: []
  }

  componentDidMount() {
    // API.loadPlants();
    this.loadPlants()
  }
  
  loadPlants = () => {
    API.loadPlants().then(res => 
      this.setState({plants: res.data, search: ""}))
  }
  
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    console.log('handle form submit called');
    event.preventDefault();
    // Add call to get plants from database here
    // API.getPlants().then(res => {
    //   if (res.data === "error") { throw new Error(res.data) }
    //   else {console.log(res.data)}        
    // }) 
    
  }

  handleSavedButton = event => {
    event.preventDefault();
    console.log(this.state.plants)
    let savedPlants = this.state.plants.filter(plant => plant.id === event.target.id)
    savedPlants = savedPlants[0];
    API.savePlant(savedPlants)
        .then(this.setState({ message: alert("Your plant is saved") }))
        .catch(err => console.log(err))
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
        <SearchResult 
        plants={this.state.plants}
        handleSavedButton={this.handleSavedButton}
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
