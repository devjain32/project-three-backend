import React, { useState, useEffect } from "react";
import GetCoordinates from "../../utils/GetCoordinates";
import API from "../../utils/API";
import "./style.css";

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
    }, [co.latitude, co.longitude]);
    
    console.log(weather);
    console.log(weather.name);
    console.log(weather.weather);
    let wea;
    let th;
    let er;
    let max;
    let min;
    if(weather.weather){
        console.log(weather.weather[0])
        wea = weather.weather[0].main;
        th = weather.weather[0].description;
    }
    console.log(weather.main);
    if(weather.main){
        console.log(weather.main.temp)
        er = Math.round(((weather.main.temp - 273.15) * 9 / 5 + 32));
        max = Math.round(((weather.main.temp_max - 273.15) * 9 / 5 + 32));
        min = Math.round(((weather.main.temp_min - 273.15) * 9 / 5 + 32));
    }
    console.log(weather.main);

    return (
        <div className="weather">
            <h5>Weather in {weather.name}</h5>
                   <p>
                        <span className="info"><strong>{wea}:</strong> {th}, {er}°F<br /></span>
                        <span className="hi"><strong>Today's High: </strong>{max}°F | </span>
                        <span className="lo"><strong>Today's Low: </strong>{min}°F</span>
                    </p>
        </div>
    )

};

export default Weather;