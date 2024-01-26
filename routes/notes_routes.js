import { Router } from "express";
import {
  getNote,
  createNote,
  updateNote,
  deleteNote,
  archiveNote,
  unarchiveNote,
  getNotearchived,
} from "../controllers/notes_controller.js";

const router = Router();

router.get("/notes", getNote);
router.get("/notes/archived", getNotearchived);
router.post("/notes", createNote);
router.patch("/notes/:id", updateNote);
router.delete("/notes/:id", deleteNote);
router.patch("/notes/:id/archive", archiveNote);
router.patch("/notes/:id/unarchive", unarchiveNote);

export default router;
