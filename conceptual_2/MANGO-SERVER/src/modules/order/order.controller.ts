import { Request, Response } from "express";
import Order from "./order.model";

const createOrder = async (req: Request, res: Response) => {
  const order = await Order.create(req.body);

  res.status(200).json({
    success: true,
    message: "Mango ordered Successfully",
    data: order,
  });
};

const getOrders = async (req: Request, res: Response) => {
  const order = await Order.find().populate("user").populate("mango");

  res.status(200).json({
    success: true,
    message: "Orders get Successfully",
    data: order,
  });
};


export const orderController = {
    createOrder,
    getOrders
}