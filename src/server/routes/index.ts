import { Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";
import { CitiesController } from "./../controllers";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  console.log(req.body);
  return res.status(StatusCodes.OK).send("OK");
});

router.get(
  "/cities",
  CitiesController.getAllCityValidation,
  CitiesController.getAll
);

router.post(
  "/cities",
  CitiesController.createCityValidation,
  CitiesController.create
);

export { router };
