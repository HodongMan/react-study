const mongoose          = require("mongoose");
const Schema            = mongoose.Schema;

const timelineSchema    = new Schema(
    {
        name: String,
        description: String,
        postDate : { type: Date, default: Date.now } // Timestamp
    }
);

// We export the schema to use it anywhere else
module.exports = mongoose.model('Timeline', timelineSchema);