const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: { type: String, requiered: true, minlength: 5, maxlength: 30 },
        email: { type: String, requiered: true, minlength: 5, maxlength: 200, unique: true },
        password: { type: String, requiered: true, minlength: 5, maxlength: 1024 }
    },
    {
        timestamps: true
    }
);

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;