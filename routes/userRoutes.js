import { Router } from "express";
import {
  addNewUser,
  getAllUsers,
  getUser,
  removeUser,
  updateUser,
} from "../controllers/userControllers.js";
import { userValidationRules } from "../middlewares/expressValidator.js";
import validateUser from "../middlewares/expressValidator.js";

const router = Router();

// Get All users
router.get("/", getAllUsers);

// Get a Single User
router.get("/:id", getUser);

// Add New User
router.post("/", userValidationRules, validateUser, addNewUser);

// Update Existing User
router.put("/:id", userValidationRules, validateUser, updateUser);

// Delete user
router.delete("/:id", removeUser);

export default router;
