import axios from "axios";

export default {
    // Gets all users
    loadUsers: function () {
        return axios.get("/");
    },
    // Gets the clothes with the given id
    // getPlants: function () {
    //     return axios.get("/plants/all");
    // },

    loadPlants: function () {
        console.log();
        return axios.get("/plants");
    },
    register: function(regData) {
        console.log(regData);
        return axios.post("/user/accounts/register", regData);
    },
    login: function(logData) {
        return axios.post("/user/accounts/login", logData);
    },
    // Gets the clothes with the given id
    // getClothesId: function (id) {
    //     return axios.get("/clothes/all/" + id);
    // },
    // // Deletes the clothes with the given id
    // deleteClothes: function (id) {
    //     return axios.delete("/clothes/" + id);
    // },
    // Saves a plant to the database
    savePlant: function (savedPlants) {
        return axios.post("/plants", savedPlants);
    }
};
