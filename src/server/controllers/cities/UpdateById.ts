import { validation } from "./../../shared/middlewares/Validations";
import { Request, Response } from "express";
import StatusCodes from "http-status-codes";
import * as yup from "yup";

interface IParamProps {
  id?: number;
}
interface IBodyProps {
  city_name: string;
}

const cityBodyValidation: yup.ObjectSchema<IBodyProps> = yup.object().shape({
  city_name: yup.string().required().min(3).strict(),
});

const cityParamValidation: yup.ObjectSchema<IParamProps> = yup.object().shape({
  id: yup.number().integer().required().moreThan(0),
});

export const updateByIdCityValidation = validation({
  body: cityBodyValidation,
  params: cityParamValidation,
});

export const updateById = async (
  req: Request<IParamProps, {}, IBodyProps>,
  res: Response
) => {
  console.log(req.body);
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    message: "Not implemented update by id",
  });
};
