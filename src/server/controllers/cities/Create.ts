import { Request, Response } from "express";
import StatusCodes from "http-status-codes";

interface City {
  name: string;
}

export const create = (req: Request<{}, {}, City>, res: Response) => {
  const data: City = req.body;
  console.log(data);
  return res.status(StatusCodes.CREATED).send("Created");
};
