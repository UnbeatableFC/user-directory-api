import { body, validationResult } from "express-validator";

export const userValidationRules = [
  body("name").notEmpty().withMessage("Name is required"),
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email format"),
  body("role").notEmpty().withMessage("Role is required"),
];

export default function validateUser(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // Send back errors in structured format
        return res.status(400).json({ errors: errors.array() });
    }
    next();
}
