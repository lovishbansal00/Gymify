const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        requiresd: false,
    },
    email: {
        type: String,
        requierd: true,
    },
    username: {
        type: String,
        required: true,
    },
    likedSongs: {
        type: Array,
        required: false,
    },
    likedPlaylists: {
        type: Array,
        required: false,
    },
    subscribedArtists: {
        type: Array,
        required: false,
    },
});


const User = mongoose.model("User", UserSchema);

module.exports = User;