import axios from "axios";

export default {
    // Gets all clothes
    // getClothes: function () {
    //     return axios.get("/");
    // },
    // Gets the clothes with the given id
    getPlants: function () {
        return axios.get("/plants/all");
    },
    // Gets the clothes with the given id
    // getClothesId: function (id) {
    //     return axios.get("/clothes/all/" + id);
    // },
    // // Deletes the clothes with the given id
    // deleteClothes: function (id) {
    //     return axios.delete("/clothes/" + id);
    // },
    // // Saves a clothe to the database
    // saveClothes: function (clothesData) {
    //     return axios.post("/api/clothes", clothesData);
    // }
};
