const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const gardenSchema = new Schema({
    // plants: { type: Array, required: false },
    plants: [{type: Schema.Types.ObjectId, ref: "Plants"}],
    userId: { type: String, unique: true }
})

// plants: [{type: Schema.Types.ObjectId, ref: "Plants"}],

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