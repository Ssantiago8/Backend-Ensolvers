import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

const Note = sequelize.define("note", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email_user: {
    type: DataTypes.STRING,
  },
  text: {
    type: DataTypes.TEXT,
  },
  is_archived: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  date: {
    type: DataTypes.STRING,
  },
});

export default Note;
