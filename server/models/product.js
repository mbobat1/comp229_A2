import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema({
 name: { type: String, required: true },
 description: String,
 price: Number,
 quantity: Number,
 category: String,
 published: { type: Boolean, default: false },
});

const Product =
 mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
