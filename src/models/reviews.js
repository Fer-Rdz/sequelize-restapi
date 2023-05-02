import { BelongsTo, DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Clients } from "./clients.js";

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
  user_id: {
    type: DataTypes.STRING,
  },
});

Reviews.belongsTo(Clients, {
  foreignKey: "user_id",
  targetKey: "id",
});
