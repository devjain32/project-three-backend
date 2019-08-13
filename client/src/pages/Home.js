import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import SearchForm from "../components/SearchForm";
import API from "../utils/API";
// import SearchResult from "../components/SearchResult";
import TestCard from "../components/TestCard";



class Home extends Component {
  state = {
    search: "",
    plants: [],
    addedPlants: []
  }

  componentDidMount() {
   
    // API.loadPlants();
    this.loadPlants()
   
  }
  
  loadPlants = () => {
    // This will probably need to change too, but we'll get to that

    API.loadGarden().then(res => {
      
      const plantsArry = [];
      for(var i=0; i<res.data.plants.length; i++){
        plantsArry.push(res.data.plants[i]._id)

      } 
      console.log("garden plants", plantsArry)
      this.setState({addedPlants: plantsArry})
      API.loadPlants().then(res => {
        console.log(res.data)
        this.setState({plants: res.data, search: "", /* addedPalnts: res.data.something */ })
      })
    })
    
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
    API.savePlant(this.state.search)
      .then(res => console.log(res))
      .catch(err => console.log(err))
    API.findPlant(this.state.search).then(res => this.setState({plants: res.data, search: ""}));
    // Add call to get plants from database here
    // API.getPlants().then(res => {
    //   if (res.data === "error") { throw new Error(res.data) }
    //   else {console.log(res.data)}        
    // }) 
    
  }

  handleSavedButton = event => {
    event.preventDefault();
    console.log(this.state.plants);
    console.log(event.target.id);
    const plantObj = {_id: event.target.id}
    API.savePlant(plantObj).then(res => {
      // Update the addedPlants array in the state
      // e.g. this.setState({ addedPlants: res.data.something });
      console.log(res);
    })
    // let savedPlants = this.state.plants.filter(plant => plant.id === event.target.id)
    // savedPlants = savedPlants[0];
    // API.savePlant(savedPlants)
    //     .then(this.setState({ message: alert("Your plant is saved") }))
    //     .catch(err => console.log(err))
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
        <TestCard 
        plants={this.state.plants}
        addedPlants={this.state.addedPlants}
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
