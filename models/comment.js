var mongoose = require("mongoose");

var commentSchema = mongoose.Schema({
    text: String,
    rating: String,
    createdAt: { type: Date, default: Date.now },
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        firstName: String,
        avatar: String
    }
});

module.exports = mongoose.model("Comment", commentSchema);