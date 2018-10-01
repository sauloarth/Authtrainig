//app requires
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//passport authentication requires
const passport = require("passport");
const LocalStrategy = require("passport-local");
const passportLocalMongoose = require("passport-local-mongoose");
const User = require("./models/user");

//config app
const app = express();
app.set("view engine", "ejs");
mongoose.connect("mongodb://localhost/authtraining", { useNewUrlParser: true });

//setting routes
app.get("/", (req, res) => {
    res.render("home");
})

app.get("/secret", (req, res) => {
    res.render("secret");
})




//config server listener
app.listen(process.env.PORT, process.env.IP, () => {
    console.log("Server running...");
})