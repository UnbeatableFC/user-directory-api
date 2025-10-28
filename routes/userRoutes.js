import { Router } from "express";
import { addNewUser, getAllUsers, getUser, removeUser, updateUser } from "../controllers/userControllers.js";
import validationMiddleware from "../middlewares/validation.js";


const router = Router()

// Get All users
router.get("/" , getAllUsers)

// Get a Single User
router.get("/:id" , getUser)

// Add New User
router.post("/" ,validationMiddleware, addNewUser )

// Update Existing User
router.put("/:id" , validationMiddleware ,updateUser)

// Delete user
router.delete("/:id" , removeUser)

export default router