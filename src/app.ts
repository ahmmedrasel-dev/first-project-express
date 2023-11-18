import express, { Application, Request, Response } from "express";
import cors from "cors";
const app: Application = express();

// Paraser
app.use(express.json());
app.use(cors());

const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send(port);
});

export default app;
