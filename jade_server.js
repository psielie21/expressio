"use strict";
const express = require("express");
const path = require("path");
const jade = require("jade");

let app = express();
const port = process.argv[2];

app.set("view engine", "jade");
app.set("views", path.join(__dirname, "templates"));
app.get("/home", function(req, res){
    res.render("index", {date: new Date().toDateString()});
});
app.listen(port);