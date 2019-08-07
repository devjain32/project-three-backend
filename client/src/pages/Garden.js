import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import GardenResult from "../components/GardenResult";
import { MyVerticallyCenteredModal } from "../components/ButtonToolbar"
import  {  Button,ButtonToolbar, Modal } from 'react-bootstrap';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <GardenResult/>
      <Button variant="primary" onClick={handleShow} style={backgroundImage: url("https://images.unsplash.com/photo-1519058497187-7167f17c6daf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60")}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
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
     <Example/>
    );
  }
  





























  // state = {
  //   plants: []
  // };


  // componentDidMount() {
  //   this.loadPlants();
  // }

  // loadPlants = () => {
  //  API.getPlants()
  //     .then(res => this.setState({ plants: res.data }))
  //     .catch(err => console.log(err));
  // }

  // render() {
  //   // const [modalShow, setModalShow] = React.useState(false);
  //   return (

  //     <div>
  //       This is the garden. Click to go back to home <br/>
  //       <Link to="/">Click here</Link> <br/>
  //       <GardenResult />
  //       <List>
  //         {this.state.plants.map(plants => (
  //           <ListItem key={plants._id}>
  //               {plants.type}

  //               <ButtonToolbar>
  //               <Button variant="primary" onClick={() => setModalShow(true)}>
  //                 Modal
  //               </Button>
  //               <MyVerticallyCenteredModal
  //                 show={modalShow}
  //                 onHide={() => setModalShow(false)}/>
  //               </ButtonToolbar>

  //           </ListItem>
  //         ))}
  //       </List>
  //     </div>
  //   );
  // }
}

export default Garden;
