require('dotenv').config()
const express = require('express');

const key = process.env.API_KEY;
const PORT = process.env.PORT || 8080;

const app = express();

// Requiring our models for syncing
var db = require("./models");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static('views'));

// Requiring our models for syncing
var db = require("./models");

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import routes and give the server access to them.
const routes = require('./routes/html-routes.js');
const apiRoutes = require('./routes/api-routes.js');
app.use(routes);
app.use(apiRoutes);
// Syncing our sequelize models and then starting our Express app
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log(key)
        console.log("App listening on PORT " + PORT);
    });
});