import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Clients } from "./clients.js";
import { Services } from "./services.js";
export const Bookings = sequelize.define(
  "bookings",
  {
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

Bookings.belongsTo(Clients, {
  foreignKey: {
    name: "client_id",
    allowNull: false,
  },
});

Clients.hasMany(Bookings, {
  foreignKey: {
    name: "client_id",
    allowNull: false,
  },
});

Bookings.belongsTo(Services, {
  foreignKey: {
    name: "service_id",
    allowNull: false,
  },
});

Services.hasMany(Bookings, {
  foreignKey: {
    name: "service_id",
    allowNull: false,
  },
});
