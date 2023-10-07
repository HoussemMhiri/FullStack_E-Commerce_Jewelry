const express = require("express");
const connectDB = require("./config/connectDB");
const app = express();
/* const cors = require("cors"); */
require("dotenv").config({ path: "./config/.env" });
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");

connectDB();
app.use(express.json({ limit: "500mb", extended: true }));
app.use(express.json());

/* app.use(cors()); */
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

const PORT = process.env.port || 8000;
app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`Server running on port ${PORT}`)
);
