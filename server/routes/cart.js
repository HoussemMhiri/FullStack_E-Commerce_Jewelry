const express = require("express");
const {
  verifyToken,
  verifyTokenAndAuth,
  verifyTokenAndAdmin,
} = require("../middleware/verifyToken");
const router = express.Router();

const Cart = require("../models/Cart");

//CREATE

router.post("/", verifyToken, async (req, res) => {
  try {
    const newCart = await Cart.create(req.body);
    res.status(200).json(newCart);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

// CART UPDATE
router.put("/:id", verifyTokenAndAuth, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

// CART DELETE

router.delete("/:id", verifyTokenAndAuth, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart has been deleted");
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

// GET USER CART

router.get("/find/:id", verifyTokenAndAuth, async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id);
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

// GET ALL

router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

module.exports = router;
