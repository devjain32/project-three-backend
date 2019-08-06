const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantsSchema = new Schema({
  type: { type: String, required: true },
  isSaved: {type: Boolean, required: false}
});

const Plants = mongoose.model("Plants", plantsSchema);

module.exports = Plants;
