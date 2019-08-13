const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantsSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  image: { type: String, trim: true },
  isSaved: {type: Boolean, default: false},
  notes: {type: Array,default: []}
});

const Plants = mongoose.model("Plants", plantsSchema);

Plants.aggregate([
  { $lookup:
      {
          from: "notes",
          foreignField: "_id",
          as: "notes"
      }
  }
]);

module.exports = Plants;
