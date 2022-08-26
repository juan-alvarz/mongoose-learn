const express = require("express");
const { getItem, getItems, createItem } = require("../controllers/tracks");
const router = express.Router();

//http://localhost/track, GET, POST, DELETE, PUT
router.get("/", getItems);
router.post("/", createItem);

module.exports = router;
