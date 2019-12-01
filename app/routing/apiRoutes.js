var express = require("express");
var path = require("path");
var friends = require("../data/friends")
var app= express();

app.post("/api/friends", function (req, res) {
    var newFriend = req.body;
    friends.push(newFriend)
})

app.get("/api/friends", function(req, res){
    return res.json(friends);
});