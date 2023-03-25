import { Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";
import { CitiesController } from "./../controllers";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  console.log(req.body);
  return res.status(StatusCodes.OK).send("OK");
});

router.post(
  "/cities",
  CitiesController.createBodyValidation,
  CitiesController.create
);

export { router };
