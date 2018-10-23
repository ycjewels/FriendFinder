var friends = require("../data/friends.js");

module.exports = function (app) {
    app.get("/api/friends", function(req, res){
        res.json(friends);
    });

    app.post("/api/friends", function(req, res){

        var bestMatch = {
            name:"",
            photo: "",
            friendDifference: 1000
        };

        //USER SURVERY POST AND PASRS
        var userData = req.body;
        var userScores = userData.scores;

        //CALULATE  THE DIFFERENCE BETWEEN THE USER'S SCORES AND SCORES OF DATABASE
        var totalDifference = 0;

        // THE LOOP FOR POSSIBILITIES
        for (var i = 0; i < friends.length; i++) {
            console.log(friends[i]);
            totalDifference = 0;

            for (var j = 0; j < friends[i].scores[j]; j++) {

                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

                if (totalDifference <= best.Match.friendDifference) {
                    bestMatch.name = friends [i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDifference = totalDifference;
                }
            }

        }

        //USERS DATAT TO THE DATABASE
        friends.push(userData);

        //RETURN A JSON WITH USER'S BESTMATCH, WILL BE USED BY HMTL IN NEXT PAGE
        res.json(bestMatch);

    });
}