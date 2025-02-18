import express from "express";
import { getUsers } from "../resolvers/users/getUsers.js";
import { deleteUsers } from "../resolvers/users/deleteUsers.js";
import { putUsers } from "../resolvers/users/putUsers.js";
import {createUsers} from "../resolvers/users/createUsers.js";
export const router = express.Router();
router.get("/", getUsers);
router.delete('/', deleteUsers);
router.put('/', putUsers);
router.post('/', createUsers);
export default router;
// export const postRouter = express.Router
