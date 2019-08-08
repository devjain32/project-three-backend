const db = require("../models");
console.log("==========================================")
// Defining methods for the plantsController
module.exports = {
  findAll: function(req, res) {
    console.log("find all was called");
    db.Plants
      .find({})
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Plants
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Plants
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Plants
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Plants
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findOne: function(req, res) {
    var plant = req.params.query;
    query = plant.charAt(0).toUpperCase() + plant.slice(1);

    
    console.log("=+=+=++=+=+= find one called")
    console.log("query:", query)
    db.Plants
      .find({'title': query})
      .then(dbPlant => res.json(dbPlant))
      .catch(err => res.status(422).json(err))
  }
};
