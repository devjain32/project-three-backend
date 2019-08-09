const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantsSchema = new Schema({
  _id: Schema.Types.ObjectId,
  title: { type: String, required: true },
  description: String,
  image: { type: String, trim: true },
  isSaved: {type: Boolean, default: false}
});

const Plants = mongoose.model("Plants", plantsSchema);

module.exports = Plants;
