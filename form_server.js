"use strict";
const express = require("express");
const bodyparser = require("body-parser");

const port = process.argv[2];
let app = express();
app.use(bodyparser.urlencoded({extended: false}));

app.post("/form", function(req, res){
    res.end(req.body.str.split('').reverse().join(''));
});

app.listen(port);