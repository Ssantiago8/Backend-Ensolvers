import express from "express";
import notes_routes from "./routes/notes_routes.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use(notes_routes);

export default app;
