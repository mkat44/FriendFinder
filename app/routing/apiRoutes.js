const path = require("path");
const friends = require("../data/friends");
const pokemon = friends.Friends;
const users = friends.otherFriends;

module.exports = function(app) {
    // show those friends entries!
    app.get("/api/friends", function(request, response) {
        console.log(friends);
        response.json(friends);
    });

    app.post("/api/friends", function(request, response) {
        var userInput = request.body;
        var responses = userInput.scores;
        var matchedName = "";
        var matchedImage = "";
        var totalDiff = 100;

        for (var i = 0; i < pokemon.length; i++) {
            var diff = 0;
            for (var j = 0; j < responses.length; j++) {
                diff += Math.abs(pokemon[i].score[j] - responses[j]);
            }
            if (diff < totalDiff) {
                totalDiff = diff;
                matchedName = pokemon[i].name;
                matchedImage = pokemon[i].photo;
            }
        }
        users.push(userInput);
        response.json({ status: "Everything A-OK!", matchedName: matchedName, matchedImage: matchedImage });
    });
}