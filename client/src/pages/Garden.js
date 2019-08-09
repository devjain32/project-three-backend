import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import { MyVerticallyCenteredModal } from "../components/ButtonToolbar"
import { Button, ButtonToolbar } from 'react-bootstrap';
class Garden extends Component {
  state = {
    plants: []
  };


  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc

  componentDidMount() {
    this.loadPlants();
  }

  loadPlants = () => {
    API.getPlants()
      .then(res => this.setState({ plants: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
      <div>
        This is the garden. Click to go back to home <br />
        <Link to="/">Click here</Link> <br />
        <List>
          {this.state.plants.map(plants => (
            <ListItem key={plants._id}>
              {plants.type}
              <ButtonToolbar>
                <Button variant="primary" onClick={() => setModalShow(true)}>
                  Modal
                </Button>

                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </ButtonToolbar>
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

export default Garden;
