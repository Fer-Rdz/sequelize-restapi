import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Clients } from "./clients.js";
import { Services } from "./services.js";

export const Bookings = sequelize.define(
  "bookings",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
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

export const Bookings_Services = sequelize.define(
  "bookings_services",
  {},
  { timestamps: false }
);

Bookings.belongsToMany(Services, {
  type: DataTypes.UUID,
  defaultValue: DataTypes.UUIDV4,
  through: Bookings_Services,
});

Services.belongsToMany(Bookings, {
  type: DataTypes.UUID,
  defaultValue: DataTypes.UUIDV4,
  through: Bookings_Services,
});

Bookings.belongsTo(Clients, {
  foreignKey: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    name: "client_id",
    allowNull: false,
  },
});

Clients.hasMany(Bookings, {
  foreignKey: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    name: "client_id",
    allowNull: false,
  },
});
