import { NextFunction, Request, RequestHandler, Response } from "express";
import yup from "yup";
import { StatusCodes } from "http-status-codes";

type TProps = "body" | "query" | "params" | "headers";

type TAllSchemas = Record<TProps, yup.Schema<any>>;

type TValidation = (schemas: Partial<TAllSchemas>) => RequestHandler;

export const validation: TValidation =
  (schemas) => async (req: Request, res: Response, next: NextFunction) => {
    const errosResult: Record<string, Record<string, string>> = {};

    Object.entries(schemas).forEach(([key, schema]) => {
      try {
        schema.validateSync(req[key as TProps], { abortEarly: false });
      } catch (error) {
        const yupError = error as yup.ValidationError;
        const ValidationErrors: Record<string, string> = {};

        yupError.inner.forEach((err) => {
          if (!err.path) return;
          ValidationErrors[err.path] = err.message;
        });

        errosResult[key] = ValidationErrors;
      }
    });

    if (Object.keys(errosResult).length === 0) {
      return next();
    } else {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: "Validation errors",
        errors: errosResult,
      });
    }
  };
