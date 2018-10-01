//app requires
const express = require("express");
const mongoose = require("mongoose");

//config app
const app = express();
app.set("view engine", "ejs");
mongoose.connect("mongodb://localhost/authtraining", { useNewUrlParser: true });


app.listen(process.env.PORT, process.env.IP, () => {
    console.log("Server running...");
})