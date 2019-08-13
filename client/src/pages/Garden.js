import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import GardenResult from "../components/GardenResult";
import { MyVerticallyCenteredModal } from "../components/ButtonToolbar"
import  {  Button, ButtonToolbar, Modal, Jumbotron, Container, Row, Col  } from 'react-bootstrap';
import Nav from "../components/Nav";
// import rose from "../components/GardenResult/rose.jpg";
import Weather from "../components/Weather";
import FontAwesome from "react-fontawesome";

function NotesBadge(props) {
  if(props.notes.length > 0){
    return(
      <FontAwesome name='sticky-note' size='2x' style={{ color: "#224922" }}/>
    )
  }
  return(<div></div>)
}

function PlantNotes(props) {
  return(
   <div> {props.notes.map(note=>(
   <React.Fragment>
     <p>{note.body}</p>
     <hr/>
    </React.Fragment>
  ))}<hr></hr></div>
   
  )
}



function Example(props) {
  const [show, setShow] = useState(false);
  const [notes, setNotes] = useState({
    notes: []
  })
  const [plantNotes, setPlantNotes] = useState({
    plantNotes: []
  })

  // const loadNotes = () => {
  //   // API.getPlantNotes(event.target.id).then(res => console.log(res));
  
  // }

  const handleClose = () => {
    console.log(plantNotes)
    setShow(false)
  };
  const handleShow = () => {
    // loadNotes();
    console.log(props.id);
    API.getPlantNotes(props.id).then(res => {
      console.log(res)
      setPlantNotes(res.data)
      
      setShow(true);
    })
    
  }

  const setNoteState = (event) => setNotes(event.target.value)
  const addNote = (event) => {
    API.postNote({
      plantId: event.target.id,
      body: notes
    })
    .then(
      res => {
        console.log(res)
        API.postNoteToPlant(res.data).then(res => {
          console.log(res);
          handleClose();
          // API.getPlantNotes().then(res => console.log(res))
          
        })
      }
    )
    .catch(err => console.log(err))
  }

  return (
    <>
      <GardenResult test={"hello"} img={props.img} handleShowProp={handleShow} id={props._id} />
      {/* <Button variant="primary" onClick={handleShow}>
       Select this plant
     </Button> */}

      <Modal show={show} onHide={() => setShow(false)} dialogClassName="modal-90w" aria-labelledby="example-custom-modal-styling-title">
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            <img style={{ width: "100%" }} src={props.img} alt="no img" />
            Notes and Tips
       </Modal.Title>
        </Modal.Header>
        <Modal.Body> 
          <PlantNotes notes={plantNotes}/>
          <textarea style={{ width: "100%", margin: "15px" }} placeholder="Add a note..." onChange={setNoteState}></textarea>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
         </Button>
          <Button variant="primary" onClick={addNote} id={props.id} style={{backgroundColor:"#142101", borderColor:"#142101"}}>
            Add Note
         </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


// When this component mounts, grab the book with the _id of this.props.match.params.id
// e.g. localhost:3000/books/599dcb67f0f16317844583fc


const Garden = () => {
  const [state, setState] = useState({
    foundGarden: false,
    plants: []
  })

  // render(){
  //   return(
  //   <>`
  //     <Example/>
  //   </>
  //   );

  const loadGarden = () => {
    API.loadGarden()
      .then(res => {setState({ foundGarden: true, plants: res.data.plants })
              console.log(res)})
      .catch(err => console.log(err));
  }

  const cutPlant = event => {
    let plant = ({_id: event.target.id})
    API.cutPlant(plant)
      .then(res => 
        {setState({plants: res.data})
        console.log(res)},
        console.log(`${plant} cut from garden`))
      .catch(err => console.log(err));
  }

  const handleDelete = event => {
    event.preventDefault();
    cutPlant(event);
  }

  // const loadPlants = () => {
  //   API.loadPlants()
  //   .then(res => setState({...state, plants: res.data}))
  //   .catch(err => console.log(err));
  // }
  // let emailArr = window.location.pathname.split("/");
  // let email = emailArr.slice(2);

  useEffect(() => {
    if (state.foundGarden === false && state.plants.length === 0) {
      loadGarden();
      // loadPlants();
    }
  })

  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <Nav />
      {/* <Weather /> */}
      <Jumbotron fluid style={{backgroundColor: "#142101"}}>
        <Container>
          <h1 className="text-center text-white">My Garden</h1>
              <p className="text-center text-white">
                Below are the plants you've saved to your garden. Make notes for each plant below by clicking on the image.
              </p>
        </Container>
      </Jumbotron>
      <Weather />
      {/* This is the garden. Click to go to plants <br />
      <Link to="/plants">Click here</Link> <br /> */}
      <List>
        <Row>
        {state.plants.map(plants => (
          <Col lg={4} md={6} sm={12} key={plants._id}>
          <ListItem key={plants._id}>
             
              <NotesBadge notes={plants.notes} notesFound={false}/>
              
              <FontAwesome name='times' size='2x' style={{ color: "#ed5d15" }} className="float-right" onClick=""/>
            
            <h3 className="text-center">{plants.title}</h3>

            <ButtonToolbar >

              {/* <Button variant="primary" onClick={() => setModalShow(true)}>
                Modal
              </Button> */}
              
              <Example img={plants.image} id={plants._id}/>
              {/* {plants.description} */}
              <MyVerticallyCenteredModal
                show={modalShow}
            
                onHide={() => setModalShow(false)}
              />
            </ButtonToolbar>
            
          </ListItem>
          </Col>
        ))}
        </Row>
      </List>
    </div>
  )
};

export default Garden;