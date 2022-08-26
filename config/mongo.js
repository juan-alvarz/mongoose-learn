const mongoose = require("mongoose");

const DB_URI = process.env.URI;
const LOCAL_URI = "mongodb://localhost:27017/webapp";

const dbConnect = () => {
  // connection to Mongo-Atlas:
  mongoose.connect(
    DB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err, res) => {
      if (err) {
        console.log("bad connection in DBServer");
      } else {
        console.log("connected to database succesfully");
      }
    }
  );
  // local connection:
  /* mongoose.connect(
    LOCAL_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err, res) => {
      if (err) {
        console.log("bad connection in local DB");
      } else {
        console.log("connected local DB succesfully");
      }
    }
  ); */
};

module.exports = { dbConnect };
