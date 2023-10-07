const express = require("express");
const User = require("../models/User");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { registerRules, validator } = require("../middleware/validateRegister");

//REGISTER

router.post("/register", registerRules(), validator, async (req, res) => {
  const { username, email, password } = req.body;
  const existantUser = await User.findOne({ email });
  if (existantUser) {
    res.status(409).json({ msg: "User already exists !" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

//LOGIN

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.status(401).json({ msg: "Wrong credentials!" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      res.status(401).json({ msg: "Wrong credentials!" });
    }

    const payload = {
      id: user._id,
      isAdmin: user.isAdmin,
    };

    const token = jwt.sign(payload, process.env.secret);

    res.status(200).json({
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        isAdmin: user.isAdmin,
      },
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

module.exports = router;
