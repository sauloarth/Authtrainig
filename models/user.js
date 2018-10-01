const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
    username: String,
    password: String
});

//set passport-local-mongoose as a plugin for userSchema (adding funcionalities)
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);