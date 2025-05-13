import { body, validationResult } from "express-validator";
import User from "../models/User.js";
export const msgValidation = [
  body("receivers")
    .isArray({ min: 1 })
    .withMessage("Must be array of at least one user")
    .custom(async (ids, { req }) => {
      const foundUsers = await User.find({
        _id: { $in: ids },
      });
      if (foundUsers.length !== ids.length) {
        throw new Error("One or more recipients do not exist");
      }
      if (ids.includes(req.user.userId)) {
        throw new Error("You cannot send a message to yourself");
      }
      return true;
    }),
  body("content").notEmpty().withMessage("Message cannot be empty").trim(),
  body("delivery")
    .notEmpty()
    .withMessage("Delivery data cannot be empty")
    .isISO8601()
    .withMessage("Invalid date format")
    .custom((date) => {
      if (new Date(date) <= new Date()) {
        throw new Error("Delivery time must be in the future");
      }
      return true;
    }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
