import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./express.js";
import productRoutes from "./routes/productRoutes.js";

// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGODB_URI;

// Connect to MongoDB using Mongoose.
mongoose
 .connect(MONGOURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
 })
 .then(() => {
  console.log("Database is connected successfully.");
  app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
  });
 })
 .catch((error) => console.log("MongoDB connection error:", error));

// Use routes
app.use("/api/products", productRoutes);

app.get("/api", (req, res) => {
 res.json({ users: ["user1", "user2", "user3", "user4"] });
});
