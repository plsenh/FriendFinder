var friendsData = require("../data/friends");

module.exports = function (app) {
    // show all friend data
    app.get("/api/friends/", function (req, res) {
        res.json(friendsData);
    })

    // add user data and find best match
    app.post("/api/friends", function (req, res) {
        var userData = (req.body);
        console.log(userData);
        console.log();

        var closestDifference = 1000;
        var bestMatch = {
            name: "",
            photo: ""
        };

        for (var i = 0; i < friendsData.length; i++) {

            var totalDifference = 0;

            console.log("==================");
            console.log("User's scores: ");
            console.log(userData.scores + "");
            console.log(friendsData[i].name + "'s scores: ");
            console.log(friendsData[i].scores + "");

            for (var j = 0; j < userData.scores.length; j++) {
                totalDifference += Math.abs((friendsData[i].scores[j]) - userData.scores[j]);
                // console.log(friendsData[i].name + ": " + friendsData[i].scores[j] + ", user: " + userData.scores[j]);
            }

            console.log("\nTotal difference: " + totalDifference);
            console.log("best diff: " + closestDifference + "\n");

            if (totalDifference < closestDifference) {
                closestDifference = totalDifference;
                // bestMatchName = friendsData[i].name;
                // bestMatch = i;
                bestMatch.name = friendsData[i].name;
                bestMatch.photo = friendsData[i].photo;
                console.log("-------------------");
                console.log("Closest difference: " + bestMatch.name + ", " + closestDifference + "\n");
            }
        }

        console.log("*Best match* " + bestMatch.name.toUpperCase() + "\n");

        friendsData.push(userData);

        res.json(bestMatch);
    });
};