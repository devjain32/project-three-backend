import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import GardenResult from "../components/GardenResult";
import { MyVerticallyCenteredModal } from "../components/ButtonToolbar"
import  {  Button,ButtonToolbar, Modal, ModalHeader } from 'react-bootstrap';
import rose from "../components/GardenResult/rose.jpg";


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



class Garden extends Component {

 
  render(){
    return(
    <>
      <Example/>
    </>
    );
  }
  






}

export default Garden;
