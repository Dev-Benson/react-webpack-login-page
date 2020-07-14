const mongoose = require("mongoose");

const token_schema = new mongoose.Schema ({
    _userId : {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "user"
    },

    token: {
        type: String,
        required: true
    },

    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
        expires: 86460
    }
})

module.exports = mongoose.model("token", token_schema)