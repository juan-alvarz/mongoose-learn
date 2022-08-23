const mongoose = require("mongoose");

const DB_URI = process.env.URI;

const dbConnect = () => {
  mongoose.connect(
    DB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err, res) => {
      if (err) {
        console.log("bad connection");
      } else {
        console.log("connected to database succesfully");
      }
    }
  );
};

module.exports = dbConnect;
