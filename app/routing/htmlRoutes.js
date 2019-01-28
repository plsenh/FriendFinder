var path = require("path");

module.exports = function (app) {
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });

    app.get("/assets/css/style.css", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/assets/css/style.css"));
    });

    app.get("/assets/images/background.png", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/assets/images/background.png"));
    });

    app.get("/assets/fonts/Stardew_Valley.ttf", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/assets/fonts/Stardew_Valley.ttf"));
    });

    app.get("/assets/fonts/burnstown_dam.ttf", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/assets/fonts/burnstown_dam.ttf"));
    });

    // If no matching route is found default to home
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
};