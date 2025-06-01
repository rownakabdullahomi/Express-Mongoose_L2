import express, { Application, Request, Response } from "express";
import fs from "fs";
import path from "path";
import { todosRouter } from "./app/todos/todos.routes";
const app: Application = express();

app.use(express.json());

const userRouter = express.Router();

app.use("/todos", todosRouter);
app.use("/user", userRouter);


app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to todos app..");
});



export default app;
