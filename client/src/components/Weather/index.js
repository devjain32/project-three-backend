import React, { useState, useEffect } from "react";
import GetCoordinates from "../../utils/GetCoordinates";
import API from "../../utils/API";

const Weather = () => {
    const co = GetCoordinates().props.children[0];
    console.log(co.latitude);
    console.log(co.longitude);

    const [weather, setWeather] = useState([])
    useEffect(()=> {
        const fetchWeather = async () =>{
            const results = await API.getWeather(co.latitude, co.longitude);
    
            setWeather(results.data);
        };
        fetchWeather();
    }, [co.latitude, co.longitude])
    
    console.log(weather);
    console.log(weather.name);
    console.log(weather.weather);

    return (
        <div>
            <h3>Weather in {weather.name}</h3>
            <span>
                    <p>{JSON.stringify(weather.weather)}</p>
            </span>
            <span>
                    {/* <p>{Coordinates.coords.long}</p> */}
            </span>
            <span>
                    {/* <p>{[weather.data]}</p> */}
            </span>
        </div>
    )

};

export default Weather;