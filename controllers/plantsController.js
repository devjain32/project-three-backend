const db = require("../models");
// Defining methods for the plantsController
module.exports = {
  findAll: function(req, res) {
    console.log(req.user)
    db.Plants
      .find({})
      .populate('notes')
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // findById: function(req, res) {
  //   db.Plants
  //     .findById(req.params.id)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  create: function(req, res) {
    db.Plants
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Plants
      .findOneAndUpdate({ title: req.params.query }, {isSaved: true})
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
      .find({title: query})
      .then(dbPlant => res.json(dbPlant))
      .catch(err => res.status(422).json(err))
  },
  findOneAndUpdate: function(req, res) {
    console.log("made it into find one and update")
    console.log(req.body.plantId)
    console.log(req.body._id)
    db.Plants
      .findOneAndUpdate({_id: req.body.plantId}, {$push: {notes: req.body}})
      .then(dbPlant => res.json(dbPlant))
      .catch(err => res.status(422).json(err))
  }
};
