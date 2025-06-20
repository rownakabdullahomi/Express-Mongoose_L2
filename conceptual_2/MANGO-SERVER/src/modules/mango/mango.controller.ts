import { Request, Response } from "express";
import Mango from "./mango.model";

const createMango = async (req: Request, res: Response) => {
  try {
    const mango = await Mango.create(req.body);

    res.status(200).json({
      success: true,
      message: "Mango created successfully",
      data: mango,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Error happened",
      error,
    });
  }
};

const getMangoes = async (req: Request, res: Response) => {
  try {
    const mango = await Mango.find();

    res.status(200).json({
      success: true,
      message: "Mango created successfully",
      data: mango,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Error happened",
      error,
    });
  }
};

export const mangoController = {
  createMango,
  getMangoes,
};
