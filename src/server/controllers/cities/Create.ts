import { Request, Response } from "express";
import StatusCodes from "http-status-codes";
import * as yup from "yup"

interface City {
  city_name: string;
}

const cityBodyValidation: yup.Schema<City> = yup.object().shape({
  city_name: yup.string().required().min(3),
});

export const create = async (req: Request<{}, {}, City>, res: Response) => {
  try {
    await cityBodyValidation.validate(req.body);
    return res.status(StatusCodes.OK).send("OK");
  } catch (error) {
    const yupError = error as yup.ValidationError;
    return res.status(StatusCodes.BAD_REQUEST).json({
      erros: {
        default: yupError.message,
      }
    });
  }
};
