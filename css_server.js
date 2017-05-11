"use strict";
const express = require("express");
const stylus = require("stylus");

const port = process.argv[2];
let app = express();
app.use(stylus.middleware(__dirname + '/stylus_files'));
app.use(express.static(__dirname + '/stylus_files'));

app.listen(port);