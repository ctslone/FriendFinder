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
        // console.log(newFriend)
        var resultsArray = []
        for (var i=0; i<newFriend.scores.length; i++) {
            var parseScore = parseInt(newFriend.scores[i]);
            resultsArray.push(parseScore);
        }
    
        // reduce method to sum the array. taking the 0 and 1 index, adding them together, then the sum becomes the zero index which is then added to the next 1 index, till no indexes are left
        var newFriendScores = resultsArray.reduce((a,b) => a+b, 0);
        console.log("New scores: " + (newFriendScores))
        Difference = Infinity;
        bestFriend = {};
        //Create for loop, compare each potential friends reduced score with the player's score.
        for (var x=0; x<friends.length; x++) {
            console.log(friends[x].scores.reduce((a,b) => a+b, 0));
            // friends[x].scores.reduce((a,b) => a+b, 0);
            // console.log(savedFriendsScore[x])
            var sub = Math.abs((friends[x].scores.reduce((a,b) => a+b, 0)) - newFriendScores)
            if (sub < Difference) {
                Difference = sub;
                // console.log("lower")
                console.log("diff " + Difference)
                bestFriend = friends[x]
            }
            
        }

        console.log(bestFriend)
        
        //The smaller difference => Difference = smaller difference && bestFriend = potentialFriends[i]



        // logic for matchmaking
        // largest possible difference in scores between 2 people is 40 (score 5 minus score 1, times 10 questions) var biggestDiff = 40;
        // first loop through the entire friends list object
            // then for each interation, loop through the scores for that person
            // get the difference in scores from the current iteration scores and the users scores
            // compare the difference 

        // for (var i=0; i<friends.length; i++) {
        //     var totalDifference = 0;
        //     var possibleDifference = 40;

        //     // scores array for each friend in the friends file
        //     var rawScores = friends[i].scores;
        //     // console.log("line 30: " + rawScores);

        //     for (var x=0; x<newFriendScores.length; x++) {
        //         // console.log("Scores iteration 29: " + newFriendScores[x])
        //         totalDifference  += Math.abs(parseInt(rawScores[x]) - parseInt(newFriendScores[x]))
        //         // console.log("difference: " + totalDifference)
                
        //     }
        //     console.log("possible diff - total diff " + (possibleDifference - totalDifference))
        // }
        // console.log(totalDifference[3])

        
        friends.push(newFriend);
        res.json(bestFriend);
    })
}

