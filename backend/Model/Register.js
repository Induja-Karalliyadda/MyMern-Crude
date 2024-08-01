const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const registerSchema = new Schema({
    name: {
        type: String, // dataType
        required: true,
    },
    email: {
        type: String, // dataType
        required: true,
    },
    password: {
        type: String, // dataType
        required: true,
    },
});

module.exports = mongoose.model("Register", registerSchema);