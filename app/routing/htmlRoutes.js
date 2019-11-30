var express = require("express");
var path = require("path");

var app = express();

app.get("/survey", function (req, response) {
    response.sendFile(path.join(__dirname, "survey.html"))
});

app.get("*", function (req, response) {
    response.sendFile(path.join(__dirname, "home.html"))
});