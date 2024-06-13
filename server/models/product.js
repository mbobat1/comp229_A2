import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
 name: { type: String, required: true },
 description: String,
 price: Number,
 quantity: Number,
 category: String,
 published: { type: Boolean, default: false },
});

export default mongoose.model("Product", productSchema);
