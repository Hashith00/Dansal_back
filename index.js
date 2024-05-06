const express = require("express");
const dansal = require("./routes/dansal.js");
const app = express();
const cors = require("cors");
app.use(express.json());

const url = "https://hashith.online";
const corsOption = {
  origin: url,
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOption));

// Deffine port here
let port = 3000;
app.use(express.urlencoded({ extended: true }));
app.use("/api", dansal);

app.listen(port, () => console.log("The server is running at PORT " + port));
