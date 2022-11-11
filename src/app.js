const express = require("express");
const app = express();

var bodyParser = require('body-parser')
const url_encoder=bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json());
app.use(url_encoder);

const router = require("./item/item.router");
app.use("/itemid", router);

module.exports = app;