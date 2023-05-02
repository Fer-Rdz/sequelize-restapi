import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Reviews = sequelize.define("reviews", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  message: {
    type: DataTypes.STRING,
  },
  date: {
    type: DataTypes.DATEONLY,
  },
});
