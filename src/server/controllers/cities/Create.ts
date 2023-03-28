import { validation } from "./../../shared/middlewares/Validations";
import { Request, Response } from "express";
import StatusCodes from "http-status-codes";
import * as yup from "yup";

interface ICity {
  city_name: string;
}

const cityBodyValidation: yup.SchemaOf<ICity> = yup.object().shape({
  city_name: yup.string().required().min(3).strict(),
});

export const createCityValidation = validation({
  body: cityBodyValidation,
});

export const create = async (req: Request<{}, {}, ICity>, res: Response) => {
  console.log(req.body);
  return res.status(StatusCodes.CREATED).json(2);
};
