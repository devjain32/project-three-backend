import React from "react";
import "./style.css";
import AddPlantCard from "../AddPlantCard";

const TestCard = props => {
    return (props.plants.length === 0) ? (
        <div className="card">
            <div className="card-body player">
                <div className="article">
                    <h3 className="text-center">So sorry! We couldn't find that plant.</h3>
                </div>
            </div>
        </div>
    ) : (
        <div className="card-header">
            <div className="card-body">
                <div className="card-title">
                    <h3> </h3>
                    <AddPlantCard/>
        {props.plants.map(plant => {
            return (
                <div className="card mb-3">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                        
                            <img src={plant.image} className="card-img" alt={plant.title}/>
                        
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                            <h5 className="card-title">{plant.title}</h5>
                            <p className="card-text">{plant.description}</p>
                            <button className="savePlant btn" id={plant._id} onClick={(event) => props.handleSavedButton(event)}>
                                Add to Garden
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
               
            
                )
            })}
            </div>
            </div>
        </div>
        )
}

export default TestCard;