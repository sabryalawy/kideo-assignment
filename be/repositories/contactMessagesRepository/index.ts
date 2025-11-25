import { getConnection } from "../../db";
import { CResponse } from "../../controllers/types/responses/ResponseBody";

const addMessage = (
  email: string,
  message: string,
  name: string
): Promise<any> => {
  const dbConnection = getConnection();
  const query = `insert into contact_messages (email, message, name) values ('${email}', '${message}', '${name}')`;

  return new Promise((resolve: Function, reject: Function) =>
    dbConnection.query(query, [], (error: any, result: any) => {
      if (error) {
        const err: CResponse<String> = {
          data: error.message,
          message: "VALIDATION_ERROR",
          status: 400,
        };
        reject(err.message);
        return;
      }
      resolve(result);
    })
  );
};

const getMessages = (page: Number = 0, limit: Number = 10): Promise<any> => {
  const dbConnection = getConnection();
  if (Number.isNaN(page)) {
    page = 0;
  }
  if (Number.isNaN(limit)) {
    limit = 10;
  }
  const query = `select * 
  from contact_messages
  limit ${limit} offset ${(page as number) * (limit as number)}`;

  return new Promise((resolve: Function, reject: Function) =>
    dbConnection.query(query, [], (error: any, result: any) => {
      if (error) {
        const err: CResponse<String> = {
          data: error.message,
          message: "VALIDATION_ERROR",
          status: 400,
        };
        reject(err.message);
        return;
      }
      resolve(result);
    })
  );
};

export { addMessage, getMessages };
