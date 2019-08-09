import React from "react";
import "./style.css";

const TestCard = props => {
    return (props.plants.length === 0) ? (
        <div className="card">
            <div className="card-body player">
                <div className="article">
                    <h3>No Plants to Display</h3>
                </div>
            </div>
        </div>
    ) : (
        <div className="card-header">
            <div className="card-body">
                <div className="card-title">
                    <h3> </h3>
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
                            <button className="savePlant btn" id={plant.id} onClick={(event) => props.handleSavedButton(event)}>
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