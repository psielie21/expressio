"use strict";
const express = require("express");
const path = require("path");

let port = process.argv[2];
let publicpath = process.argv[3];
let app = express();

app.use(express.static(publicpath||path.join(__dirname, 'public')));

app.listen(port);