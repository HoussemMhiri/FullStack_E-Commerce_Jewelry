const express = require("express");
const {
  verifyToken,
  verifyTokenAndAuth,
  verifyTokenAndAdmin,
} = require("../middleware/verifyToken");
const router = express.Router();

const Order = require("../models/Order");

//CREATE

router.post("/", verifyToken, async (req, res) => {
  try {
    const newOrder = await Order.create(req.body);
    res.status(200).json(newOrder);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

// ORDER UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

// ORDER DELETE

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json("Order has been deleted");
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

// GET USER ORDERS

router.get("/find/:id", verifyTokenAndAuth, async (req, res) => {
  try {
    const orders = await Order.find(req.params.id);
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

// GET ALL ORDERS

router.get("/", verifyTokenAndAdmin, async (req, res) => {
  const query = req.query.new;
  try {
    const orders = query
      ? await Order.find().sort({ _id: -1 }) /* .limit(5) */
      : await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

//Get Monthly Income

router.get("/income", verifyTokenAndAdmin, async (req, res) => {
  const productId = req.query.id;
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
  try {
    const income = await Order.aggregate([
      {
        $match: {
          createdAt: { $gte: previousMonth },
          ...(productId && {
            products: { $elemMatch: { productId: productId } },
          }),
        },
      },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);
    res.status(200).json(income);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

module.exports = router;
