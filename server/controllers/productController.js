import Product from "../models/Product.js";

export const getAllProducts = async (req, res) => {
 try {
  const products = await Product.find();
  res.json(products);
 } catch (err) {
  res.status(500).json({ message: err.message });
 }
};

export const getProductById = async (req, res) => {
 try {
  const product = await Product.findById(req.params.id);
  if (!product) {
   return res.status(404).json({ message: "Product not found" });
  }
  res.json(product);
 } catch (err) {
  res.status(500).json({ message: err.message });
 }
};

export const createProduct = async (req, res) => {
 const product = new Product(req.body);
 try {
  const newProduct = await product.save();
  res.status(201).json(newProduct);
 } catch (err) {
  res.status(400).json({ message: err.message });
 }
};

export const updateProduct = async (req, res) => {
 try {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
   new: true,
  });
  if (!product) {
   return res.status(404).json({ message: "Product not found" });
  }
  res.json(product);
 } catch (err) {
  res.status(400).json({ message: err.message });
 }
};

export const deleteProduct = async (req, res) => {
 try {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) {
   return res.status(404).json({ message: "Product not found" });
  }
  res.json({ message: "Product deleted" });
 } catch (err) {
  res.status(500).json({ message: err.message });
 }
};

export const deleteAllProducts = async (req, res) => {
 try {
  await Product.deleteMany();
  res.json({ message: "All products deleted" });
 } catch (err) {
  res.status(500).json({ message: err.message });
 }
};

export const findPublishedProducts = async (req, res) => {
 try {
  const products = await Product.find({ published: true });
  res.json(products);
 } catch (err) {
  res.status(500).json({ message: err.message });
 }
};

export const findProductsByName = async (req, res) => {
 try {
  const products = await Product.find({
   name: new RegExp(req.query.name, "i"),
  });
  res.json(products);
 } catch (err) {
  res.status(500).json({ message: err.message });
 }
};
