const db = require("../models");

module.exports = {
    findAndUpdate: function(req, res){
        console.log("******************", req.user.email)
        console.log("*****************", req.body)
        db.Garden
            .findOneAndUpdate({userId: req.user.email}, {$push: {plants: req.body._id}})
            .then(dbGarden => 
                console.log("updated garden", dbGarden),
                // res.json(dbGarden)
            )
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
            .populate('plants.notes')
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res){
        console.log(req.body)
        db.Garden
            .create({userId: req.body.email})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    pop: function(req, res){
        console.log(req.user)
        console.log(req.user.email)
        console.log(req.body)
        console.log(req.body._id)
        db.Garden
            .findOneAndUpdate({userId: req.user.email},
                {$pull: {plants: req.body._id}},
                {safe: true, upsert: true})
                .then(dbGarden => 
                    console.log("updated garden", dbGarden),
                    // res.json(dbGarden)
                )
                .catch(err => res.status(422).json(err));
    }
};