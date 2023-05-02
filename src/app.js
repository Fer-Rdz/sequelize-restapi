import express from "express";
import employeesRoutes from "./routes/employees.routes.js";
import clientsRoutes from "./routes/clients.routes.js";

export const port = 3000;
export const app = express();

app.use(express.json());

app.use(employeesRoutes);
app.use(clientsRoutes);
