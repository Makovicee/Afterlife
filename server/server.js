import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";
import msgRoutes from "./routes/msgRoutes.js";
import friendsRoutes from "./routes/friendsRoutes.js";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/msg", msgRoutes);
app.use("/api/friends", friendsRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the afterlife");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error to connection to MongoDB: ", err.message);
  });
