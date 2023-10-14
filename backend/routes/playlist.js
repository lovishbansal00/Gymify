const express = require("express");
const passport = require("passport");
const Playlist = require("../models/Playlist");

const router = express.Router();

// create a plalist 
router.post("/create", passport.authenticate("jwt", { session: false }), async (req, res) => {
    const currentUser = req.user;
    const { name, thumbnail, songs } = req.body;
    if (!name || !thumbnail || !songs) {
        return res.status(301).json({ message: "Please provide all the details" });
    }

    const playlistData = new Playlist({
        name,
        thumbnail,
        songs,
        owner: currentUser.id,
        collaborators: []
    });
    const newPlaylist = await Playlist.create(playlistData);
    return res.status(200).json(newPlaylist);
});


// get a playlist by id 
router.get("/get/:playlistId", passport.authenticate("jwt", { session: false }), async (req, res) => {
    const playlistId = req.params.playlistId;

    const playlist = await Playlist.findOne({ _id: playlistId });
    if (!playlist) {
        return res.status(301).json({ err: "Playlist not found" });
    }
    return res.status(200).json({ data: songs });
});

module.exports = router;