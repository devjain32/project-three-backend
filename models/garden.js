const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gardenSchema = new Schema({
    plants: { type: Array, required: false },
    userId: { type: String }
})

const Garden = mongoose.model("Garden", gardenSchema);

Garden.aggregate([
    { $lookup:
        {
            from: "plants",
            localField: "isSaved",
            foreignField: "_id",
            as: "plants"
        }
    }
]);

module.exports = Garden;