import { Request, Response, Router } from "express";
import {
  addContactMessage,
  getContactMessage,
} from "../../services/contactMessagesService";
import { CResponse, makeResponse } from "../types/responses/ResponseBody";
import {
  VARIABLES_VALIDATION_FAILD,
  exptionHandlerASYNC,
} from "../../exptionHandler";

const ContactMessagesControllerRout: Router = Router();

ContactMessagesControllerRout.post(
  "/",
  exptionHandlerASYNC(async (request: Request, response: Response) => {
    if (!request.body.email || !request.body.password) {
      throw VARIABLES_VALIDATION_FAILD;
    }
    const data = await addContactMessage(
      request.body.email,
      request.body.message,
      request.body.name
    );

    const res: CResponse<any> = {
      data: data,
      message: "OK",
      status: 200,
    };
    makeResponse(response, res);
  })
);

ContactMessagesControllerRout.get(
  "/",
  exptionHandlerASYNC(async (request: Request, response: Response) => {
    const user = await getContactMessage(
      request.query.page,
      request.query.limit
    );
    const res: CResponse<any> = {
      data: user,
      message: "OK",
      status: 200,
    };
    makeResponse(response, res);
  })
);

export default ContactMessagesControllerRout;
