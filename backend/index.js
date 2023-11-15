const express = require("express");
const mongoose = require("mongoose");
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require("passport");
require("dotenv").config();
const cors = require("cors");

// models
const User = require("./models/User");

// routes
const authRoutes = require("./routes/auth");
const songRoutes = require("./routes/song");
const playlistRoutes = require("./routes/playlist");

const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect("mongodb://localhost:27017/spotifyDB", { useNewUrlParser: true, useUnifiedTopology: true });

let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'thisKeyIsSecretKey';
passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
    User.findOne({ id: jwt_payload.sub }, (err, user) => {
        // (done, doesTheUserExits)
        if (err)
            return done(err, false);

        if (user)
            return done(null, user);
        else
            return done(null, false);
    });
}));



app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use("/auth", authRoutes);

app.use("/song", songRoutes);

app.use("playlist", playlistRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});