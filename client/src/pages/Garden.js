import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import GardenResult from "../components/GardenResult";

class Garden extends Component {
  state = {
    plants: []
  };


  componentDidMount() {
    this.loadPlants();
  }

  loadPlants = () => {
   API.loadPlants()
      .then(res => this.setState({ plants: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (

      <div>
        This is the garden. Click to go back to home <br/>
        <Link to="/">Click here</Link> <br/>
        <GardenResult />
        <List>
          {this.state.plants.map(plants => (
            <ListItem key={plants._id}>
                {plants.type}
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

export default Garden;
