const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true},
  password: { type: String, required: true }
});

userSchema.pre("save", function(next){
  if(!this.isModified("password")){
    return next();
  }
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

userSchema.methods.validPassword = function(plaintext){
  return bcrypt.compareSync(plaintext, this.password);
};

const User = mongoose.model("User", userSchema);

User.aggregate([
  { $lookup:
    {
      from: "garden",
      localField: "userId",
      foreignField: "_id",
      as: "garden"
    }
  }
]);

module.exports = User;

