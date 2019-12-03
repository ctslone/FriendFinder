// var express = require("express");
// var path = require("path");
var friends = require("../data/friends")
// var app= express();

module.exports = function(app) {
    app.get("/api/friends", function(req, res){
        return res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;
        friends.push(newFriend)
    })
}

