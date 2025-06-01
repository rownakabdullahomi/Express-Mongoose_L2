import express, { Request, Response } from "express";
import fs from "fs";
import path from "path";
import { client } from "../../config/mongodb";
import { ObjectId } from "mongodb";

export const todosRouter = express.Router();

todosRouter.get("/", async (req: Request, res: Response) => {
  const db = await client.db("todosDB");
  const collection = await db.collection("todos");
  const todos = await collection.find().toArray();
  res.json(todos);
});

todosRouter.post("/create-todo", async (req: Request, res: Response) => {
  const { title, description, priority } = req.body;

  const db = await client.db("todosDB");
  const collection = await db.collection("todos");
  await collection.insertOne({
    title,
    description,
    priority,
    isCompleted: false,
  });

  const todos = await collection.find().toArray();

  res.json(todos);
});

todosRouter.patch("/update-todo/:id", async (req: Request, res: Response) => {
  const id = req.params.id;

  const { title, description, priority, isCompleted } = req.body;

  const db = await client.db("todosDB");
  const collection = await db.collection("todos");

  const query = { _id: new ObjectId(id) };
  const updatedTodo = await collection.updateOne(
    query,
    {
      $set: {
        title,
        description,
        priority,
        isCompleted,
      },
    },
    { upsert: true }
  );

  res.json(updatedTodo);
});
todosRouter.get("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;

  const db = await client.db("todosDB");
  const collection = await db.collection("todos");

  // const query = {_id: new ObjectId(id)}

  const todo = await collection.findOne({ _id: new ObjectId(id) });
  res.json(todo);
});

todosRouter.delete("/delete-todo/:id", async (req: Request, res: Response) => {
  const id = req.params.id;

  const db = await client.db("todosDB");
  const collection = await db.collection("todos");

  // const query = {_id: new ObjectId(id)}

  const todo = await collection.deleteOne({ _id: new ObjectId(id) });
  res.json(todo);
});
