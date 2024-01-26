import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("notes", "postgres", "mypassword", {
  host: "localhost",
  dialect: "postgres",
});
