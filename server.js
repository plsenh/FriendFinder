// EXPRESS CONFIGURATION
var express = require("express");
var path = require("path");

// create an "express" server in node
var app = express();

// access files in public folder
app.use(express.static("app/public/"));

// sets an initial port
var PORT = process.env.PORT || 8080;

// sets up the Express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// ROUTER
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// LISTENER
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});