import express, { Request, Response } from "express";
import { User } from "../models/user.model";
import { z } from "zod";

export const usersRoutes = express.Router();

const CreateUserZodSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  age: z.number(),
  email: z.string(),
  password: z.string(),
  role: z.string().optional(),
});

usersRoutes.post("/create-user", async (req: Request, res: Response) => {
  try {
    const body = await CreateUserZodSchema.parseAsync(req.body);
    const user = await User.create(body);
    res.status(201).json({
      success: true,
      message: "User created successfully.",
      data: user,
    });
  } catch (error: any) {
    console.log(error);
     res.status(400).json({
      success: false,
      message: `Error occured. ${error.message}`,
      error
    });
  }
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
