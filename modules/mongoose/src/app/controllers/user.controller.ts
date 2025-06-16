import express, { Request, Response } from "express";
import { User } from "../models/user.model";

export const usersRoutes = express.Router();

usersRoutes.post("/create-user", async (req: Request, res: Response) => {
  const body = req.body;
  const user = await User.create(body);
  res.status(201).json({
    success: true,
    message: "User created successfully.",
    data: user,
  });
});

usersRoutes.get("/", async (req: Request, res: Response) => {
  const users = await User.find();

  res.status(201).json({
    success: true,
    message: "Users are shown  successfully.",
    data: users,
  });
});

usersRoutes.get("/:userId", async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const user = await User.findById(userId);

  res.status(201).json({
    success: true,
    message: "Get user successfully.",
    data: user,
  });
});

usersRoutes.patch("/:userId", async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const updatedBody = req.body;
  const user = await User.findByIdAndUpdate(userId, updatedBody, { new: true });

  res.status(201).json({
    success: true,
    message: "User updated successfully.",
    data: user,
  });
});

usersRoutes.delete("/:userId", async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const user = await User.findByIdAndDelete(userId);

  res.status(201).json({
    success: true,
    message: "Note deleted successfully.",
    data: user,
  });
});
