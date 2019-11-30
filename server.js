var express = require("express");
var path = require("path");

var app= express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function(){
    console.log("Port is listening on "+ PORT);
});

