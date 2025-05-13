import { body, validationResult } from "express-validator";

export const loginValidation = [
  body("email")
    .notEmpty()
    .withMessage("Email cannot be empty")
    .isEmail()
    .withMessage("Email must be in valid format"),
  body("password").notEmpty().withMessage("Password cannot be empty"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export const registerValidation = [
  body("username")
    .notEmpty()
    .withMessage("User name cannot be empty")
    .isLength({ min: 3, max: 20 })
    .withMessage("User name must be 3-20 characters long")
    .trim(),
  body("email")
    .notEmpty()
    .withMessage("Email cannot be empty")
    .isEmail()
    .withMessage("Email must be in valid format"),
  body("password")
    .notEmpty()
    .withMessage("Password cannot be empty")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long")
    .matches(/[A-Z]/)
    .withMessage("Password must have contain at least 1 upper case letter")
    .matches(/[a-z]/)
    .withMessage("Password must have contain at least 1 lower case letter")
    .matches(/[0-9]/)
    .withMessage("Password must contain a number"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
