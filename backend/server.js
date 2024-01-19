require("dotenv").config();

const express = require("express");

const app = express();

//routes
app.get("/", (req, res) => {
  res.json({ mssg: "welcome to the app" });
});

//
app.listen(process.env.PORT, () => {
  console.log("server running at port 5000");
});
