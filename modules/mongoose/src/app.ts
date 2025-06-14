import express, { Application, Request, Response } from "express";
import { model, Schema } from "mongoose";

const app: Application = express();
app.use(express.json());

const noteSchema = new Schema(
    {
  title: { type: String, required: true, trim: true },
  content: { type: String, default: "" },
  category: {
    type: String,
    enum: ["personal", "work", "family", "other"],
    default: "personal",
  },
  pinned: {
    type: Boolean,
    default: false,
  },
  tags: {
    label: { type: String, required: true },
    color: { type: String, default: "gray" },
  },
}, {
    versionKey: false,
    timestamps: true
}

);

const Note = model("Note", noteSchema);

app.post("/notes/create-note", async (req: Request, res: Response) => {
  const body = req.body;
  const note = await Note.create(body);

  res.status(201).json({
    success: true,
    message: "Note created successfully.",
    data: note,
  });
});

app.get("/notes", async (req: Request, res: Response) => {
  const notes = await Note.find();

  res.status(201).json({
    success: true,
    message: "Note created successfully.",
    data: notes,
  });
});

app.get("/notes/:noteId", async (req: Request, res: Response) => {
  const nodeId = req.params.noteId;
  const note = await Note.findById(nodeId);

  res.status(201).json({
    success: true,
    message: "Note created successfully.",
    data: note,
  });
});

app.patch("/notes/:noteId", async (req: Request, res: Response) => {
  const nodeId = req.params.noteId;
  const updatedBody = req.body;
  const note = await Note.findByIdAndUpdate(nodeId, updatedBody, {new: true});

  res.status(201).json({
    success: true,
    message: "Note updated successfully.",
    data: note,
  });
});

app.delete("/notes/:noteId", async (req: Request, res: Response) => {
  const nodeId = req.params.noteId;
  const note = await Note.findByIdAndDelete(nodeId);

  res.status(201).json({
    success: true,
    message: "Note deleted successfully.",
    data: note,
  });
});











app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Note App");
});

export default app;
