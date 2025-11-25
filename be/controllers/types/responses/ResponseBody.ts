import { Response } from "express";

export type CResponse<T> = { data?: T; status: status; message: statusMessage };

type status = 200 | 202 | 400 | 401 | 500 | 404 | 403;
type statusMessage =
  | "OK"
  | "ACCEPTED"
  | "VALIDATION_ERROR"
  | "NOT_FOUND"
  | "UNAUTHERIZED"
  | "INTERNAL_SERVER_ERROR";

export const makeResponse = (res: Response, response: CResponse<any>): void => {
  res.status(response.status);
  res.send(response);
};
