const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantsSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  image: { type: String, trim: true },
  isSaved: {type: Boolean, required: false}
});

const Plants = mongoose.model("Plants", plantsSchema);

module.exports = Plants;
