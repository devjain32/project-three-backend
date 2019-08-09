import React, { useState } from "react";
import GetCoordinates from "../../utils/GetCoordinates";
// import API from "../../utils/API";

const Weather = () => {
    const [state, setState] = useState({
        weather: "",
        foo: "bar"
    });
    const coords = GetCoordinates().props;
    // console.log(coords.children[0].latitude);
    const lat = {...coords.children[0]}.latitude;
    // console.log(coords.children[1].longitude);
    const long = {...coords.children[1]}.longitude;
    const getWeather = (lat, long) => {
        if(lat && long){
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=4862ae605d56e820907f865fd8f479fa`)
            .then(res => setState({...state, weather: res.data}))
            .catch(err => console.log(err));
        }
    }
    return (
        <div>
            <h3>Weather in your location</h3>
            <span>
                    <p>{lat}</p>
            </span>
            <span>
                    <p>{long}</p>
            </span>
            {
                console.log(getWeather(lat, long))
            }
            {
                console.log(state)
            }
        </div>
    )

};

export default Weather;