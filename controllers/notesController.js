const db = require("../models");
// Defining methods for the notesController
module.exports = {
  findByPlant: function(req, res) {
    console.log("made it inside find notes by plant")
    console.log(req.params.plantId)
    db.Notes
      .find({ plantId: req.params.plantId })
      .sort({ date: -1 })
      .then(dbNotes => res.json(dbNotes))
      .catch(err => res.status(422).json(err));
  },
  findByUser: function(req, res) {
    db.Notes
      .find({ userId: req.body.userId })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log(req.user.id)
    console.log(req.body)
    console.log(req.body)
    db.Notes
      .create({
        body: req.body.body,
        plantId: req.body.plantId,
        userId: req.user.id
        })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
