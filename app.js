require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { dbConnect } = require("./config/mongo.js");

const app = express();

app.use(express.json());
app.use(cors());
// para usar datos estáticos, o datos locales
app.use(express.static("storage"));

const port = process.env.PORT || 3000;

//invocamos a las rutas
//localhost:/api/
app.use("/api", require("./routes"));

//ejecuta el back en el puerto
app.listen(port, () => console.log(`Listening on port ${port}`));

dbConnect();
