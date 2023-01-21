require('dotenv').config()
const key = process.env.API_KEY;
let db = require("../models");
console.log("peter", key);

let path = require("path");
let router = require("express").Router();

router.get("/api/key", function(req, res) {
    res.json(key)
});
router.delete("/api/activities/:TEMP?", function(req, res) {
    db.activities.destroy({
      where: {
        TEMP: req.params.TEMP
      }
    }).then(function(dbactivities) {
      res.json(dbactivities);
    });
});
router.get("/api/activities/:TEMP?", function(req, res) {
    db.activities.findOne({
        where: {
            TEMP: req.params.TEMP
        }
    }).then(function(dbactivities) {
        res.json(dbactivities)
    });
});
router.post("/api/activities", function(req, res) {
    db.activities.create(req.body).then(function(dbactivities) {
        res.json(dbactivities);
    });
});

module.exports = router;
