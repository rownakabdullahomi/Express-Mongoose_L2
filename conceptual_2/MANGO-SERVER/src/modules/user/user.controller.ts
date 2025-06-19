import { Request, Response } from "express";
import User from "./user.model";

export const registerUser = async (req: Request, res: Response) => {
  const body = req.body;

  //   const user = new User(body);
  //   const data = await user.save();

  const user = await User.create(body);

  res.status(200).json({
    success: true,
    message: "User Registered Successfully",
    data: user,
  });
};

export const getUsers = async (req: Request, res: Response) => {

  const user = await User.find();

  res.status(200).json({
    success: true,
    message: "Users retrieved Successfully",
    data: user,
  });
};

