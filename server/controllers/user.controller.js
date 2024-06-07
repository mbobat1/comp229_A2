import User from "../models/user.model.js";

const create = async (req, res) => {
    console.log(req.body);
    const user = new User(req.body);
    try {
        await user.save();
        return res.status(200).json({
            message: "Successfully signed up!",
        });
    } catch (err) {
        console.error(err);
    }
}

export { create }