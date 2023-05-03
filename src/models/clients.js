import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Clients = sequelize.define(
  "clients",
  {
    name: {
      type: DataTypes.STRING,
    },
    lastname: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);
