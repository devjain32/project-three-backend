const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const notesSchema = new Schema({
    body: { type: String, required: true },
    // notes: [{ type: Schema.Types.ObjectId, ref: "Plants" }],
    userId: { type: String },
    plantId: { type: String }
})

const Notes = mongoose.model("Notes", notesSchema);

module.exports = Notes;