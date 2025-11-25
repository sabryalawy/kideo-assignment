import { getConnection } from "../../db";
import { CResponse } from "../../controllers/types/responses/ResponseBody";

const addMessage = (
  email: string,
  message: string,
  name: string
): Promise<any> => {
  const dbConnection = getConnection();
  const query = `insert into contact_messages (email, message, name) values (${email}, ${message}, ${name})`;

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

const getMessages = (page: Number, limit: Number): Promise<any> => {
  const dbConnection = getConnection();
  const query = `select * 
  from messages   `;

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

export default {
  addMessage,
  getMessages,
};
