import express, { Request, Response } from "express";
import { User } from "../models/user.model";
import { z } from "zod";
import bcrypt from "bcryptjs";

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
    // const zodBody = await CreateUserZodSchema.parseAsync(req.body);
    const body = req.body;

    // const password = await bcrypt.hash(body.password, 10);
    // body.password = password

    // static method.... it is better**
    // const password =await User.hashPassword(body.password)
    // body.password = password;

    const user = await User.create(body);

    // instance methods
    // const user = new User(body);
    // const password = await user.hashPassword(body.password);
    // user.password = password;
    // await user.save();

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
      error,
    });
  }
});

usersRoutes.get("/", async (req: Request, res: Response) => {
  const userEmail = req.query.email;
  console.log(userEmail);
  let users = [];

  // sorting
  // users = await User.find().sort({"email": "asc"})
  // users = await User.find().sort({"email": "desc"})
  // users = await User.find().sort({"email": 1})
  // users = await User.find().sort({"email": -1})

  // skipping
  // users = await User.find().skip(2)

  // limiting
  users = await User.find().limit(2)

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
  // const user = await User.findByIdAndDelete(userId);
  const user = await User.findOneAndDelete({ _id: userId });

  res.status(201).json({
    success: true,
    message: "Note deleted successfully.",
    data: user,
  });
});
