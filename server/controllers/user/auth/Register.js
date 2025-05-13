import User from "../../../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const passHash = await bcrypt.hash(password, 10);

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User is already registered" });
    }

    const user = new User({
      username,
      email,
      password: passHash,
    });

    await user.save();
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res
      .cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      })
      .status(201)
      .json({ message: "User was successfully created" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
