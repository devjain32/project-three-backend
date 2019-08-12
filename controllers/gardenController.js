const db = require("../models");

module.exports = {
    findAndUpdate: function(req, res){
        console.log("******************", req.user.email)
        console.log("*****************", req.body)
        db.Garden
            .findOneAndUpdate({userId: req.user.email}, {$push: {plants: req.body._id}})
            .then(dbGarden => {
                // Have this send pack the array of plants to the React app, e.g. res.json(something)
                console.log("updated garden", dbGarden)
            })
            .catch(err => res.status(422).json(err));
    },
    find: function(req, res){
        console.log("========load garden called==========")
        console.log(req.user)
        console.log(req.body)
        console.log("hello");
        db.Garden
            .findOne({userId: req.user.email})
            .populate('plants')
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res){
        console.log(req.body)
        db.Garden
            .create({userId: req.body.email})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};