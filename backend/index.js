const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./models/User");
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require("passport");
require("dotenv").config();

mongoose.connect("mongodb://localhost:27017/spotifyDB", { useNewUrlParser: true, useUnifiedTopology: true });

let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'thisKeyIsSecretKey';
passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
    User.findOne({ id: jwt_payload.sub }, function (err, user) {
        // (done, doesTheUserExits)
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));



app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});