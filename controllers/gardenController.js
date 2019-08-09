const db = require("../models");

module.exports = {
    findAndUpdate: function(req, res){
        console.log("******************", req.user.email)
        console.log("*****************", req.body)
        db.Garden
            .findOneAndUpdate({userId: req.user.email}, {$push: {plants: req.body}})
            .then(dbGarden => console.log("updated garden", dbGarden))
            .catch(err => res.status(422).json(err));
    },
    find: function(req, res){
        console.log("hello", req.user.email);
        console.log(req.user)
        db.Garden
            .findOne({userId: req.user.email})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res){
        db.Garden
            .create({userId: req.body.email})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};