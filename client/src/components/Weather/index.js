import React, { Component } from "react";
import GetCoordinates from "../../utils/GetCoordinates";
import API from "../../utils/API";
let lat;
let long;

GetCoordinates();
lat = GetCoordinates.latitude;
long = GetCoordinates.longitude;

class Weather extends Component {
    state = {
        weather:  []
    }

    componentDidMount(){
        this.findWeather();
    }

    findWeather() {
        API.getWeather(lat, long)
            .then(res => this.setState({ weather: res.data }))
            .catch(err => console.log(err))
    
    }

    render(){
        return (
            <div>
                <h3>Weather in your location</h3>
                <span>
                    {this.state.weather}
                </span>
            </div>
        )
    }

};

export default Weather;