const db = require("../models");

module.exports = {
    find: function(req, res){
        console.log("hello", req.params.email);
        console.log(req.user)
        db.Garden
            .findOne({userId: req.params.email})
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