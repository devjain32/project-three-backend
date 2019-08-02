const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  plantsPosted: { type: Array, required: false }
});

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;

