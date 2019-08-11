const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantsSchema = new Schema({
  _id: Schema.Types.ObjectId,
  title: { type: String, required: true },
  description: String,
  image: { type: String, trim: true },
  isSaved: {type: Boolean, default: false},
  notes: [{ type: Schema.Types.ObjectId, ref: "Notes" }]
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
