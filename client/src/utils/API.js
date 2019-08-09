import axios from "axios";
require("dotenv").config();

export default {
    makeGarden: function(email){
        return axios.post("/garden/create", email);
    },
    loadGarden: function(email){
        return axios.get("/garden/" + email);
    },
    loadPlants: function () {
        return axios.get("/plants");
    },
    savePlant: function (id) {
        return axios.post("/garden", id);
    },
    register: function(regData) {
        return axios.post("/user/accounts/register", regData);
    },
    login: function(logData) {
        return axios.post("/user/accounts/login", logData);
    },
    // getWeather: function(lat, long) {
    //     return axios.get(`api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=4862ae605d56e820907f865fd8f479fa`)
    // },
    findPlant: function(query) {
        return axios.get("/plants/"+query)
    }
};
