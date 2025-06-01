import express, { Request, Response } from "express";
import fs from "fs";
import path from "path";
import { client } from "../../config/mongodb";

export const todosRouter = express.Router();

const filePath = path.join(__dirname, "../../../db/todo.json");

todosRouter.get("/", async(req: Request, res: Response) => {

  const db = await client.db("todosDB");
  const collection = await db.collection("todos");
  const todos = await collection.find().toArray();
  res.json(todos);
});

todosRouter.post("/create-todo", async (req: Request, res: Response) => {

  const { title, description, priority} = req.body;


  const db = await client.db("todosDB");
  const collection = await db.collection("todos");
  await collection.insertOne({
    title,
    description,
    priority,
    isCompleted: false
  });

  const todos = await collection.find().toArray();

  
  res.json(todos);

});
