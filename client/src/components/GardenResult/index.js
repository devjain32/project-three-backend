import React from "react";
import "./style.css";
// import rose from "./rose.jpg";



function GardenResult(props){

    return (
        <div className="parent">
            <div className="garden">
                <img id="rose" onClick={()=>{props.handleShowProp()}} src={props.img} alt="garden-section" className="rounded mx-auto d-block"/>
            </div>

        </div>

        // <div className="parent">
        // <div className="card bg-dark text-white garden">
            
        //     <img id="rose" className="card-img" onClick={()=>{props.handleShowProp()}} src={props.img} alt="garden-section" />
        //         <div className="card-img-overlay">
        //             <h5 className="title">{props.title}</h5>
        //         </div>
        // </div>
        // </div>
    );
}

export default GardenResult;
