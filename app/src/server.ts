import express from "express";
import { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
    res.json({"Name": "Applitude"});
});

app.listen(3000, () => console.log("Running on port 3000"));
