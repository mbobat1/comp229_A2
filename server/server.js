import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import productRoutes from "./routes/productRoutes.js";
import Product from "/models/product.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;
const MONGOURL = process.env.MONGODB_URI;

// Connect to MongoDB using Mongoose.
mongoose
 .connect(MONGOURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
 })
 .then(() => {
  console.log("Database  is connected successfully.");

  const newProduct = new Product({
   name: "jacket",
   description:
    "Mountain Warehouse Fell 3 in 1 Water Resistant Jacket Black M ",
   price: 59.99,
   quantity: 1,
   category: "men",
   published: false,
  });
  /*
  newProduct
   .save()
   .then((savedProduct) => {
    console.log("Product saved:", savedProduct);
   })
   .catch((error) => {
    console.error("Error saving product:", error);
   });
*/
  app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
  });
 })
 .catch((error) => {
  console.error("MongoDB connection error:", error);
 });

// home route
app.get("/", (req, res) => {
 res.json({ message: "Welcome to Maaz's Dressstore application." });
});

// Use routes
app.use("/api/products", productRoutes);

app.get("/api", (req, res) => {
 res.json({ users: ["user1", "user2", "user3", "user4"] });
});

export default app;
