const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./Config/db");
const userRoutes = require("./Routes/userRoutes");
const postRoutes = require("./Routes/postRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.listen(6000, () => console.log("Server running on port 6000"));
