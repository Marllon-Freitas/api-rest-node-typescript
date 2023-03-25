import express, { Router } from "express";
import { StatusCodes } from "http-status-codes";

const router = Router();

router.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello World!");
});

router.post("/", (req: express.Request, res: express.Response) => {
  res.status(StatusCodes.OK).send("Hello World!");
});

export { router };
