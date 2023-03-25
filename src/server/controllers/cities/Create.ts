import { NextFunction, Request, Response } from "express";
import StatusCodes from "http-status-codes";
import * as yup from "yup";

interface City {
  city_name: string;
  city_state: string;
}

const cityBodyValidation: yup.Schema<City> = yup.object().shape({
  city_name: yup.string().required().min(3).strict(),
  city_state: yup.string().required().min(2).strict(),
});

export const createBodyValidation = async (
  req: Request<{}, {}, City>,
  res: Response,
  next: NextFunction
) => {
  try {
    await cityBodyValidation.validate(req.body, { abortEarly: false });
    return next();
  } catch (error) {
    const yupError = error as yup.ValidationError;
    const ValidationErrors: Record<string, string> = {};

    yupError.inner.forEach((err) => {
      if (!err.path) return;
      ValidationErrors[err.path] = err.message;
    });
    return res.status(StatusCodes.BAD_REQUEST).json({
      erros: ValidationErrors,
    });
  }
};

export const create = async (req: Request<{}, {}, City>, res: Response) => {
  return res.status(StatusCodes.OK).json({
    message: "City created",
  });
};
