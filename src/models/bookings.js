import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Bookings = sequelize.define(
  "bookings",
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    date: {
      type: DataTypes.DATEONLY,
    },
    time: {
      type: DataTypes.TIME,
    },
  },
  {
    timestamps: false,
  }
);
