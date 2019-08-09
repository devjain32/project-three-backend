import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import GardenResult from "../components/GardenResult";
<<<<<<< HEAD
import { MyVerticallyCenteredModal } from "../components/ButtonToolbar"
import  {  Button,ButtonToolbar, Modal, ModalHeader } from 'react-bootstrap';
import rose from "../components/GardenResult/rose.jpg";
=======
import Weather from "../components/Weather";

>>>>>>> master


function Example(props) {
  const [show, setShow] = useState(false);

<<<<<<< HEAD
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <GardenResult test={"hello"} handleShowProp={handleShow}/>
      {/* <Button variant="primary" onClick={handleShow}>
        Select this plant
      </Button> */}

      <Modal show={show} onHide={() => setShow(false)} dialogClassName="modal-90w" aria-labelledby="example-custom-modal-styling-title">
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            <img style={{width:"100%"}} src={rose} alt="no img"/>
            Notes and Tips
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <textarea style={{width:"100%", margin:"15px"}} placeholder="Add a note..."></textarea>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}



class Garden extends Component {

 
  render(){
    return(
    <>
      <Example/>
    </>
    );
=======
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
    )
>>>>>>> master
  }
  






}

export default Garden;
