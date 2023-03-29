import { validation } from "./../../shared/middlewares/Validations";
import { Request, Response } from "express";
import StatusCodes from "http-status-codes";
import * as yup from "yup";
import { ICities } from "../../database/models";
import { CitiesProvider } from "../../database/providers/cities";

interface IBodyProps extends Omit<ICities, "id"> {
  city_name: string;
}

// body: yup.Schema<ICity>
const cityBodyValidation: yup.SchemaOf<IBodyProps> = yup.object().shape({
  city_name: yup.string().required().min(3).strict(),
});

export const createCityValidation = validation({
  body: cityBodyValidation,
});

export const create = async (
  req: Request<{}, {}, IBodyProps>,
  res: Response
) => {
  const result = await CitiesProvider.create(req.body);
  if (result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      erros: {
        default: result.message,
      },
    });
  }
  return res.status(StatusCodes.CREATED).json({
    message: `City ${req.body.city_name} created successfully`,
    city_name: req.body.city_name,
    id: result,
  });
};
