const db = require("../models");

module.exports = {
    find: function(req, res){
        console.log("hello", req.user.email);
        db.Garden
            .findOne({userId: req.user.email})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res){
        db.Garden
            .create({userId: req.user.email})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};