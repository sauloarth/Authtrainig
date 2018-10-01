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
app.use(bodyParser.urlencoded({extended:true}));

//config passport
app.use(require("express-session")({
    secret: "Yabadabadu",
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(User.serializeUser()); //say to use plugin added
passport.deserializeUser(User.deserializeUser()); //say to use plugin added

//set routes
app.get("/", (req, res) => {
    res.render("home");
})

app.get("/secret", (req, res) => {
    res.render("secret");
})

//auth routes
app.get("/register", (req, res) => {
    res.render("register");
})

app.post("/register", (req, res) => {
    User.register(new User({username: req.body.username}), req.body.password, (err, newUser) => {
        if(err){
            console.log(err);
            return res.render("register");
        } else {
            passport.authenticate("local")(req, res, () => {
                res.redirect("/secret");
            })
                
        }
    })
})




//config server listener
app.listen(process.env.PORT, process.env.IP, () => {
    console.log("Server running...");
})