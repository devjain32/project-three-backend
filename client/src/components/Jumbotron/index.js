import React from "react";

const Jumbotron = (props) => {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h2 className="display-4">{props.title}</h2>
                <p className="lead">{props.message}</p>
            </div>
        </div>
    )
}

export default Jumbotron;


