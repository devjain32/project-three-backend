import React from "react";
import "./style.css";
import rose from "./rose.jpg";

function GardenResult(){
    return (
        <div className="garden">
            <img id="rose" src={rose} alt="garden-section"/>
        </div>
    );
}

export default GardenResult;