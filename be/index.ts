import dotenv from "dotenv";
import app from "./express";
import { init } from "./db";
import ContactMessagesControllerRout from "./controllers/contactMessagesController";
import { Request, Response } from "express";
import cors from "cors";
//rwar
dotenv.config();

init();
const port = process.env.PORT;
app.use(cors());

app.use("/contact", ContactMessagesControllerRout);

app.use((err: any, req: Request, res: Response, next: Function) => {
  console.error(err.message);
  err = err.status ? err : { status: 500, message: err.message };
  res.status(err.status).send(err);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
