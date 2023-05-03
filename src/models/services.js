import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Services = sequelize.define(
  "services",
  {
    name: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.DOUBLE,
    },
  },
  {
    timestamps: false,
  }
);
