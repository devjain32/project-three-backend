import React from "react";
import "./style.css";
import rose from "./rose.jpg";

function GardenResult(){
    return (
        <div className="parent">
            <div className="garden">
                <img id="rose" src={rose} alt="garden-section"/>
            </div>

            <div className="notes">
                <h3>Tips for taking care of this plant :</h3>
                <ul class="list">
                    <li class="tips">1. Water it twice a day</li>
                    <li class="tips">2. Need sunshine for at least 2 hrs per day</li>
                    <li class="tips">3. Keep it in a dry area</li>
                </ul>

                <textarea>Enter your note...</textarea>
                <button>Add a note</button>

            </div>
        </div>
    );
}

export default GardenResult;