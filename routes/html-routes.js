// Requiring path to so we can use relative routes to our HTML files
let path = require("path");
let router = require("express").Router();
let db = require("../models");

router.get("/", function(req, res) {
    // By default send the user to the calender page
    res.sendFile(path.join(__dirname, "../views/index.html"));
});
module.exports = router;