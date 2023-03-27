import { validation } from "./../../shared/middlewares/Validations";
import { Request, Response } from "express";
import StatusCodes from "http-status-codes";
import * as yup from "yup";

interface IQueryProps {
  page?: number;
  limit?: number;
  filter?: string;
}

const cityGetAllValidation: yup.ObjectSchema<IQueryProps> = yup.object().shape({
  page: yup.number().min(1).moreThan(0),
  limit: yup.number().min(1).moreThan(0),
  filter: yup.string().min(3).strict(),
});

export const getAllCityValidation = validation({
  query: cityGetAllValidation,
});

export const getAll = async (
  req: Request<{}, {}, {}, IQueryProps>,
  res: Response
) => {
  console.log(req.query);
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    message: "not implemented get all",
  });
};
