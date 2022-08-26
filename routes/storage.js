const express = require("express");
const multer = require("multer");
const { createItem } = require("../controllers/storage.js");
const router = express.Router();
//http://localhost:3000/storage

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const pathStorage = `${__dirname}/../storage`;
    cb(null, pathStorage);
  },

  filename: function (req, file, cb) {
    const ext = file.originalname.split(".").pop();
    const filename = `file-${Date.now()}.${ext}`;
    cb(null, filename);
  },
});

const uploadMiddleare = multer({ storage });

router.post("/", uploadMiddleare.single("myFile"), createItem);

module.exports = router;
