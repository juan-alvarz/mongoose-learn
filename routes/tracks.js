const express = require("express");
const { getItem, getItems, createItem } = require("../controllers/tracks");
const router = express.Router();
const { validatorCreateItem } = require("../validators/tracks.js");

//http://localhost/track, GET, POST, DELETE, PUT
router.get("/", getItems);
router.post("/", /* validatorCreateItem, */ createItem);
router.delete("/:id");

module.exports = router;
