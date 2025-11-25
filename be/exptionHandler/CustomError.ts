import { CResponse } from "../controllers/types/responses/ResponseBody";

class CustomError extends Error {
  status: number;
  constructor(response: CResponse<any>) {
    super();
    this.message = response.data;
    this.status = response.status;
    this.name = response.message;
  }
}

export default CustomError;
