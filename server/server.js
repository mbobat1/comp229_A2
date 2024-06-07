import config from "./config/config.js";
import mongoose from "mongoose";
import router from "./routes/api.route.js";
import app from "./express.js";

mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUri, {
 useNewUrlParser: true,
 useUnifiedTopology: true,
});
mongoose.connection.on("error", (e) => {
 throw new Error(`unable to connect to database: ${config.mongoUri}`);
});

const port = 3000;

app.use("/", router);
app.get("/api", (req, res) => {
 res.json({ users: ["user1", "user2", "user3", "user4"] });
});

app.listen(port, () => {
 console.log(`Server is running on port ${port}`);
});
