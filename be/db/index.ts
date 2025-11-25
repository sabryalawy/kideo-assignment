import { Pool } from "mysql2";
import { createPool } from "mysql2";

var db: Pool;

export const init = () => {
  if (!db) {
    db = createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USRE,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      timezone: "Z",
    });
  }
};

export const getConnection = () => {
  if (!db) {
    throw new Error(
      "The db pool has not been initialized, call init({}) prior to get()."
    );
  }

  return db;
};
