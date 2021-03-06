var express = require("express");
var path = require("path");

var app= express();
var PORT = process.env.PORT || 3000;

// send and recieve data through URL
app.use(express.urlencoded({ extended: true }));
// recive json objects from req.body
app.use(express.json());

// app.use(express.static(__dirname + "./app/public/style/style.css"));
// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, '/app/public')));

// requiring the route files which return a function, then passing the express app through
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

// confirming server is active and listening
app.listen(PORT, function(){
    console.log("Port is listening on "+ PORT);
});

