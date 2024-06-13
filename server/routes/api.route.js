import express from "express";
import studentRouter from "./student.route.js";
import userRouter from "./user.router.js";
const router = express.Router();

router.get("/", (req, res) => {
 res.json({ message: "Welcome to Maaz's Dressstore application." });
});

router.use("/api", studentRouter, userRouter);

export default router;
