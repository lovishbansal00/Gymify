const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect("mongodb://localhost:27017/spotifyDB", { useNewUrlParser: true, useUnifiedTopology: true });

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});