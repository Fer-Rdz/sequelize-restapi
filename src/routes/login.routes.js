import { Router } from "express";
import { Clients } from "../models/clients.js";
import jwt from "jsonwebtoken";

const loginRoute = Router();

loginRoute.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await Clients.findOne({ where: { email } });
  if (!user) return res.status(400).json({ message: "error" });
  const passwordValidate = await Clients.findOne({ where: { password } });
  if (!passwordValidate) return res.status(400).json({ message: "error" });

  const token = jwt.sign(
    {
      name: user.name,
      lastname: user.lastname,
      email: user.email,
      id: user.id,
    },
    process.env.JWT_PRIVATE_KEY
  );

  res.header("auth-token", token).json({
    error: null,
    data: { token },
  });
});

export default loginRoute;
