import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Clients } from "./clients.js";
import { Services } from "./services.js";

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
    client_id: {
      type: DataTypes.STRING,
    },
    service_id: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

Services.hasMany(Bookings, {
  foreignKey: "service_id",
  sourceKey: "id",
});

Bookings.belongsTo(Clients, {
  foreignKey: "client_id",
  targetKey: "id",
});
