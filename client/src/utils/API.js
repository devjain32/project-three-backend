import axios from "axios";
require("dotenv").config();

export default {
    makeGarden: function(email){
        return axios.post("/garden/create", email);
    },
    loadGarden: function(){
        return axios.get("/garden/api");
    },
    loadPlants: function () {
        return axios.get("/plants/api");
    },
    savePlant: function (id) {
        return axios.post("/garden/api", id);
    },
    register: function(regData) {
        return axios.post("/user/accounts/register", regData);
    },
    login: function(logData) {
        return axios.post("/user/accounts/login", logData);
    },
    getWeather: function(lat, long) {
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=4862ae605d56e820907f865fd8f479fa`)
    },
    findPlant: function(query) {
        return axios.get("/plants/api/"+query)
    },
    postNote: function(note) {
        return axios.post("/notes/create", note)
    },
    postNoteToPlant: function(note) {
        return axios.post("/plants/api/notes", note)
    },
    logout: function(){
        return axios.get("/user/accounts/logout");
    },
    getPlantNotes: function(plantId){
        return axios.get("/notes/"+plantId)
    }
};
