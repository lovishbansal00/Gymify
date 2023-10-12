const express = require("express");
const passport = require("passport");
const Song = require("../models/Song");
const router = express.Router();

router.post("/create", passport.authenticate("jwt", { session: false }), async (req, res) => {
    const { name, thumbnail, track } = req.body;
    if (!name || !thumbnail || !track) {
        return res
            .status(301)
            .json({ err: "Please provide all details" });
    }
    const artist = req.user._id;
    const songDetails = {
        name,
        thumbnail,
        track,
        artist
    };
    const song = await Song.create(songDetails);
    return res.status(200).json(song);
});

router.get(
    "/get/mysongs",
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
        const currentUser = req.user;

        //  getting all the songs published by the current user
        const songs = await Song.find({ artist: req.user._id });
        return res.status(200).json({ data: songs });
    });

module.exports = router;