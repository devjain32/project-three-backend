import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import GardenResult from "../components/GardenResult";
import Weather from "../components/Weather";


class Garden extends Component {
  state = {
    plants: []
  };


  componentDidMount() {
    let emailArr = window.location.pathname.split("/");
    let email = emailArr.slice(2);
    this.loadGarden(email);
  }

  componentDidUpdate(){
    this.loadPlants();
  }

  loadGarden = email => {
    API.loadGarden(email)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }

  loadPlants = () => {
   API.loadPlants()
      .then(res => this.setState({ plants: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        This is the garden. Click to search plants <br/>
        <Link to="/plants">Click here</Link> <br/>
        <GardenResult />
        <Weather />
        <List>
          {this.state.plants.map(plants => (
            <ListItem key={plants.isSaved}>
                <h5>{plants.title}</h5>
                <p>{plants.description}</p>
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

export default Garden;
