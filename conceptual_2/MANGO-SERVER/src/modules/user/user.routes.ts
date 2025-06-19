import { Router } from "express";
import { getUsers, registerUser } from "./user.controller";

const userRoutes = Router();

userRoutes.post("/", registerUser);
userRoutes.get("/", getUsers);

export default userRoutes;