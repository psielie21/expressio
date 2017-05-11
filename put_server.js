"use strict";
const express = require("express");
const crypto = require("crypto");

const port = process.argv[2];
let app = express();

app.put("/message/:id", function(req, res){
    let id = req.params.id;
    let answer = crypto.createHash("sha1").update(new Date().toDateString() + id).digest("hex");
    res.end(answer);
});

app.listen(port);