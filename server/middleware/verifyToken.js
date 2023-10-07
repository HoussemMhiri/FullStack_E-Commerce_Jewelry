const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config({ path: "./config/.env" });
const verifyToken = async (req, res, next) => {
  let token = req.headers.Authorization || req.headers.authorization;
  try {
    let decoded = jwt.verify(token, process.env.secret);
    if (!decoded) {
      res.status(400).json({ msg: "invalid Token" });
    }
    const user = await User.findById(decoded.id).select("-password");
    if (!user) {
      res.status(400).json({ msg: "you are unAuthorized" });
    } else {
      req.user = user;
      next();
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const verifyTokenAndAuth = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are Not Allowed !");
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are Not Allowed !");
    }
  });
};

module.exports = { verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin };
