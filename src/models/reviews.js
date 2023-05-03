import { BelongsTo, DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Clients } from "./clients.js";

export const Reviews = sequelize.define("reviews", {
  message: {
    type: DataTypes.STRING,
  },
  stars: {
    type: DataTypes.INTEGER,
  },
});

Reviews.belongsTo(Clients, {
  foreignKey: {
    name: "client_id",
    allowNull: false,
  },
});

Clients.hasOne(Reviews, {
  foreignKey: {
    name: "client_id",
    allowNull: false,
  },
});
