
const mongoose = require("mongoose");

const user_schema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
        min: 6,
        max: 30
    },

    email: {
        type: String,
        required: true,
        min:6,
        max: 255
    },

    password: {
        type: String,
        required: true,
        min: 8,
        max:1024
    },

    isVerified: {
        type: Boolean,
        required: false,
        default: false
    },

    password_reset_token: {
        type: String,
    },

    password_reset_expires: {
        type: Date,
    },

    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("User", user_schema)