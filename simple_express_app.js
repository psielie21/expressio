"use strict";
const express = require("express");

let port = process.argv[2];
let app = express();
app.get("/home", function(req, res){
    res.end("Hello World!");
});
app.listen(port);