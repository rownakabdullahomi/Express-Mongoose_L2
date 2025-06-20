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

const getMangoById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const mango = await Mango.findById(id);

    res.status(200).json({
      success: true,    
      message: "Mango get successfully",
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


const updateMango = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const mango = await Mango.findByIdAndUpdate(id, body, {
        new: true,
        runValidators: true
    });

    res.status(200).json({
      success: true,    
      message: "Mango updated successfully",
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

const deleteMango = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const mango = await Mango.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Mango deleted successfully",
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
  getMangoById,
  updateMango,
  deleteMango
};
