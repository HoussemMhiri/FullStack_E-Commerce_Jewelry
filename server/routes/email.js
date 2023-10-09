const express = require("express");
const { verifyToken } = require("../middleware/verifyToken");
const { sendEmail } = require("../middleware/SendEmail");
const router = express.Router();

//CREATE

router.post("/", verifyToken, async (req, res) => {
  try {
    const { fullName, email, phone, message } = req.body;
    sendEmail({ fullName, email, phone, message });
    res.status(200).json({ msg: "Your message sent successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

module.exports = router;
