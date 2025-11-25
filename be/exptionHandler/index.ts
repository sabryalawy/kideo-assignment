import { Request, Response } from "express";
import CustomError from "./CustomError";

export const exptionHandlerASYNC =
  (fun: Function) => async (reqest: Request, response: Response, next: any) => {
    try {
      await fun(reqest, response, next).catch((e: any) => next(e));
    } catch (err) {
      next(err);
    }
  };

export const VARIABLES_VALIDATION_FAILD: CustomError = new CustomError({
  data: "VARIABLES_VALIDATION_FAILD",
  message: "VALIDATION_ERROR",
  status: 400,
});
