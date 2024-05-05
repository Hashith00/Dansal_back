const express = require("express");
const dansal = require("./routes/dansal.js");
const app = express();
const cors = require("cors");
app.use(express.json());

const url = "http://localhost:8080";
const corsOption = {
  origin: url,
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOption));

// Deffine port here
let port = 4000;
app.use(express.urlencoded({ extended: true }));
app.use("/api", dansal);

app.listen(port, () => console.log("The server is running at PORT " + port));
