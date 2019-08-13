import React, { Component } from "react";
import "./style.css";
import ReactDOM from "react-dom";
import axios from "axios";
import logo from '../Header/Plant Pal Logo.png'
class AddPlantCard extends Component {
  state = {
        plantName: "",
        plantDesc: ""
      };

  setName = event => {
        this.setState({plantName: event.target.value})
    }
   setDesc = event => {
        this.setState({plantDesc: event.target.value})
    }

  uploadFile = () => {
        console.log("file upload")
        // const node = ReactDOM.findDOMNode(this);
        // if (node instanceof HTMLElement) {
            const file = document.querySelector('#myfile').files[0];
            const plantName = this.state.plantName;
            const plantDesc = this.state.plantDesc;
        // }
        console.log(plantName);
        console.log(plantDesc);
        const data = new FormData();
        data.append("file", file);
        data.append("pname", plantName);
        data.append("desc", plantDesc);
        // axios.post("/upload", data).then(res => console.log(res))
        fetch("/upload", {
            method: "POST",
            body: data
        }).then(response => console.log(response))
    }

    render(){

            return (
                <div className="card mb-3 add-plant-div" >
                    <div className="row no-gutters">
                        <div className="col-md-4">
                        
                            <img  className="card-img" src={logo}/>
                        
                        </div>
                        <div className="col-md-8 add-plant-form" >
                            <div className="card-body">
                            <h5 className="card-title">Add a plant to our database </h5>
                            Plant Name:
                            <input type="text"  className="col-12 form-control" id="plant-name" onChange={this.setName}/>
                            Plant Description / Helpful Instructions:
                            <textarea className="col-12 form-control" id="plant-description" onChange={this.setDesc}></textarea>
                            Plant Image:
                            <br/>
                            <input type="file" id="myfile" />
                            {/* const form = document.querySelector("form");
        form.onsubmit = function (event) {
            event.preventDefault();
            const file = document.querySelector("#myfile").files[0];
            const data = new FormData();
            data.append("file", file)
            fetch("/upload", {
                method: "POST",
                body: data
            }).then(response => console.log(response))
        } */}               <br/>
                            <br/>
                            <button className="savePlant btn" onClick={this.uploadFile}>
                                Add Plant
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
               
            
               
         
        
        )
    }
}


export default AddPlantCard;