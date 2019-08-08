import React, { Component } from "react";
import GetCoordinates from "../../utils/GetCoordinates";
import Proptypes from "prop-types";
// import API from "../../utils/API";

// const coordProps = GetCoordinates().props
const long = Proptypes.checkPropTypes({values: GetCoordinates.longitude});
    
// console.log(coordProps);
console.log(long);
    // API.getWeather(lat, long)
    //     .then(res => this.setState({ weather: res.data }))
    //     .catch(err => console.log(err))

function Weather(props) {
    return (
        <div>
            <h3>Weather in your location</h3>
            <span>
                    {props}
            </span>
        </div>
    )

};

export default Weather;