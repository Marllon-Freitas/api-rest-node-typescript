import { validation } from "./../../shared/middlewares/Validations";
import { Request, Response } from "express";
import StatusCodes from "http-status-codes";
import * as yup from "yup";

interface IParamsProps {
  id?: number;
}

const cityDeleteByIdValidation: yup.SchemaOf<IParamsProps> = yup
  .object()
  .shape({
    id: yup.number().integer().required().moreThan(0),
  });

export const getDeleteByIdCityValidation = validation({
  params: cityDeleteByIdValidation,
});

export const deleteById = async (req: Request<IParamsProps>, res: Response) => {
  console.log(req.params);
  return res.status(StatusCodes.OK).json(
    `Register ${req.params.id} deleted successfully`
  );
};
