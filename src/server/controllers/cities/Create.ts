import { validation } from "./../../shared/middlewares/Validations";
import { Request, Response } from "express";
import StatusCodes from "http-status-codes";
import * as yup from "yup";

interface ICity {
  city_name: string;
  city_state: string;
}
interface ICityFilter {
  city_filter?: string;
  limit?: number;
}

// body: yup.Schema<ICity>
const cityBodyValidation: yup.Schema<ICity> = yup.object().shape({
  city_name: yup.string().required().min(3).strict(),
  city_state: yup.string().required().min(2).strict(),
});

// query: yup.Schema<ICityFilter>
const filterCityValidation: yup.Schema<ICityFilter> = yup.object().shape({
  city_filter: yup.string().min(3).strict(),
});

export const createCityValidation = validation({
  body: cityBodyValidation,
  query: filterCityValidation,
});

export const create = async (req: Request<{}, {}, ICity>, res: Response) => {
  return res.status(StatusCodes.OK).json({
    message: "City created",
  });
};
