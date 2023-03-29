import { validation } from "./../../shared/middlewares/Validations";
import { Request, Response } from "express";
import StatusCodes from "http-status-codes";
import * as yup from "yup";
import { ICities } from "../../database/models";

interface IParamProps {
  id?: number;
}
interface IBodyProps extends Omit<ICities, "id"> {
  city_name: string;
}

const cityBodyValidation: yup.SchemaOf<IBodyProps> = yup.object().shape({
  city_name: yup.string().required().min(3).strict(),
});

const cityParamValidation: yup.SchemaOf<IParamProps> = yup.object().shape({
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
  return res.status(StatusCodes.OK).json({
    message: `City ${req.body.city_name} updated successfully`,
    city_name: req.body.city_name,
    id: Number(req.params.id),
  });
};
