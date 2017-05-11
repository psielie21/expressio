"use strict";
const express = require("express");
const fs = require("fs");

const port = process.argv[2];
const filename = process.argv[3];
let app = express();

app.get("/books", function(req,res){
    
    let f;
    fs.readFile(filename,function(err, file){
        if(err)throw new err;
        res.send(JSON.parse(file));
        res.end();
    })
    
});

app.listen(port);