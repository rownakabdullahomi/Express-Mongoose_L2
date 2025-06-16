import express, { Request, Response } from 'express';
import { Note } from '../models/notes.model';

export const notesRoutes = express.Router();

notesRoutes.post("/create-note", async (req: Request, res: Response) => {
  const body = req.body;
  const note = await Note.create(body);

  res.status(201).json({
    success: true,
    message: "Note created successfully.",
    data: note,
  });
});

notesRoutes.get("/", async (req: Request, res: Response) => {
  const notes = await Note.find().populate("user");

  res.status(201).json({
    success: true,
    message: "Note created successfully.",
    data: notes,
  });
});

notesRoutes.get("/:noteId", async (req: Request, res: Response) => {
  const nodeId = req.params.noteId;
  const note = await Note.findById(nodeId);

  res.status(201).json({
    success: true,
    message: "Note created successfully.",
    data: note,
  });
});

notesRoutes.patch("/:noteId", async (req: Request, res: Response) => {
  const nodeId = req.params.noteId;
  const updatedBody = req.body;
  const note = await Note.findByIdAndUpdate(nodeId, updatedBody, { new: true });

  res.status(201).json({
    success: true,
    message: "Note updated successfully.",
    data: note,
  });
});

notesRoutes.delete("/:noteId", async (req: Request, res: Response) => {
  const nodeId = req.params.noteId;
  const note = await Note.findByIdAndDelete(nodeId);

  res.status(201).json({
    success: true,
    message: "Note deleted successfully.",
    data: note,
  });
});