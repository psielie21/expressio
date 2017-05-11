"use strict";
const express = require("express");

const port = process.argv[2];
let app = express();

app.get("/search", function(req, res){
   let query = req.query;
   res.send(query);
   res.end();
});


app.listen(port);