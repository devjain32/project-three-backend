import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import { MyVerticallyCenteredModal } from "../components/ButtonToolbar"
import { Button, ButtonToolbar } from 'react-bootstrap';
import GardenResult from "../components/GardenResult";
import { MyVerticallyCenteredModal } from "../components/ButtonToolbar"
import  {  Button,ButtonToolbar, Modal, ModalHeader } from 'react-bootstrap';
import rose from "../components/GardenResult/rose.jpg";
import Weather from "../components/Weather";



function Example(props) {
  const [show, setShow] = useState(false);

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


  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc


class Garden extends Component {

 
  render(){
    return(
    <>
      <Example/>
    </>
    );
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
    )
  }
  






}

export default Garden;
