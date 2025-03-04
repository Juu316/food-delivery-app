import express from "express";
import { getUsers } from "../controllers/users/getUsers.js";
import { deleteUsers } from "../controllers/users/deleteUsers.js";
import { putUsers } from "../controllers/users/PutUsers.js";
import { createUser} from "../controllers/users/createUser.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
export const router = express.Router();
router.get("/", authMiddleware, getUsers);
router.delete("/", deleteUsers);
router.put("/", putUsers);
router.post("/users", createUser);
router.post("/", createUser);
export default router;
