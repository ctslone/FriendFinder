var express = require("express");
var path = require("path");

var app= express();
var PORT = 3000;

// var htmlRoute = require('./app/routing/htmlRoutes');
// var apiRoute = require('./app/routing/apiRoutes');
// // var someapi = require('./routes/1/someapi');

// app.use(htmlRoute);
// app.use(apiRoute);


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function(){
    console.log("Port is listening on "+ PORT);
});

