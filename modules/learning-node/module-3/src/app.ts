import express, { Application, Request, Response } from "express";
import fs from "fs";
import path from "path";
const app: Application = express();

const filePath = path.join(__dirname, "../db/todo.json");

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to todos app..");
});

app.get("/todos", (req: Request, res: Response) => {
  const data = fs.readFileSync(filePath, { encoding: "utf-8" });
  res.json(data);
});




export default app;
