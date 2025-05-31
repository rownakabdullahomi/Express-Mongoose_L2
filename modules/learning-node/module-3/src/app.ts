import express, { Application, Request, Response } from "express";
import fs from "fs";
import path from "path";
const app: Application = express();

app.use(express.json());

const filePath = path.join(__dirname, "../db/todo.json");

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to todos app..");
});

app.get("/todos/:title/:body", (req: Request, res: Response) => {
  console.log("From Query", req.query);
  console.log("From Params", req.params);
  const data = fs.readFileSync(filePath, { encoding: "utf-8" });
  res.json(data);
});

app.post("/todos/create-todo", (req: Request, res: Response) => {
  const { title, body } = req.body;
  console.log(`${title} --> ${body}`);
  res.send("Welcome to todos app..");
});

export default app;
