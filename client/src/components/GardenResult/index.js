import React from "react";
import "./style.css";
import rose from "./rose.jpg";

function GardenResult(props){
    return (
        <div className="parent">
            <div className="garden">
                <img id="rose" onClick={()=>{props.handleShowProp()}} src={props.img} alt="garden-section"/>
            </div>

        </div>
    );
}

export default GardenResult;