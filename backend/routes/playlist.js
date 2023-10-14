const express = require("express");
const passport = require("passport");
const Playlist = require("../models/Playlist");
const User = require("../models/User");

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
router.get("/get/playlist/:playlistId", passport.authenticate("jwt", { session: false }), async (req, res) => {
    const playlistId = req.params.playlistId;

    const playlist = await Playlist.findOne({ _id: playlistId });
    if (!playlist) {
        return res.status(301).json({ err: "Playlist not found" });
    }
    return res.status(200).json({ data: songs });
});


// get all playlists made by an aartist
router.get("/get/artist/:artistId", passport.authenticate("jwt", { session: false }), async (req, res) => {
    const artistId = req.params.artistId;
    const artist = await User.findOne({ _id: artistId });
    if (!artist)
        return res.statusCode(301).json({ err: "Invalid Artist ID" });

    const playlists = await Playlist.find({ owner: artistId });
    return res.status(200).json({ data: playlists });
});


// add a song to a playlist
router.post("/add/song", passport.authenticate("jwt", { session: false }), async (req, res) => {
    const currentUser = req.user; playlist
    const { playlistId, songId } = req.body;

    const playlist = await Playlist.findOne({ _id: playlistId });
    if (!playlist)
        return res.status(301).json({ err: "Playlist not found" });

    // check if user owns the playlist
    // currentUser._id != playlist.owner this will give false result as the type of currentUser._id is object and playlist.owner is string
    if (!currentUser._id.equals(playlist.owner) && !playlist.collaborators.includes(currentUser._id))
        return res.status(301).json({ err: "You do not have permission to edit this playlist" });

    // check if the song is valid or not
    const song = await Song.findOne({ _id: songId });
    if (!song)
        return res.statusCode(304).json({ err: "Song does not exist" });

    // adding the song into playlist
    playlist.songs.push(songId);
    await playlist.save();

    return res.statusCode(200).json(playlist);
});


module.exports = router;