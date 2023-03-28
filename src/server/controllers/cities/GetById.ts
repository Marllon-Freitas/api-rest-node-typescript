import { validation } from "./../../shared/middlewares/Validations";
import { Request, Response } from "express";
import StatusCodes from "http-status-codes";
import * as yup from "yup";

interface IParamsProps {
  id?: number;
}

const cityGetByIdValidation: yup.SchemaOf<IParamsProps> = yup
  .object()
  .shape({
    id: yup.number().integer().required().moreThan(0),
  });

export const getByIdCityValidation = validation({
  params: cityGetByIdValidation,
});

export const getById = async (req: Request<IParamsProps>, res: Response) => {
  console.log(req.params);
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    message: "not implemented get by id",
  });
};
