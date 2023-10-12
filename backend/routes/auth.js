const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { getToken } = require("../utils/helper");
const bcrypt = require('bcrypt');

router.post("/register", async (req, res) => {
    // req.body format :- email, password, firstName, lastName, username
    const { email, password, firstName, lastName, username } = req.body;

    // check if user already exists or not
    const user = await User.findOne({ email: email });
    if (user) {
        return res
            .status(403)
            .json({ message: "User already exists" });
    }

    // create new user
    // convert the password into hash
    const hasheedPassword = bcrypt.hash(password, 10);
    const newUserData = {
        email,
        password: hasheedPassword,
        firstName,
        lastName,
        username,
    };
    const newUser = await User.create(newUserData);

    // create token for JSON Web Toker
    const token = await getToken(email, newUser);

    // return the user without password
    const returnUser = { ...newUser.toJSON(), token };
    returnUser.password = undefined;
    return res.status(200).json(returnUser);
});


router.post("/login", async (req, res) => {
    // get email and password from req.body
    const { email, password } = req.body;

    // check if user exists or not
    const user = await User.find({ email: email });
    if (!user) {
        return res
            .statusCode(403)
            .json({ err: "User does not exists" });
    }

    // check if password is correct or not
    const isPasswordCorrect = bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
        return res
            .statusCode(403)
            .json({ err: "Password is incorrect" });
    }

    // create token for JSON Web Toker
    const token = await getToken(email, user);
    const returnUser = { ...user.toJSON(), token };
    returnUser.password = undefined;
    return res.status(200).json(returnUser);
});

module.exports = router;