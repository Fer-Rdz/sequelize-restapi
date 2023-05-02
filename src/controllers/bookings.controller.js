import { code } from "../idgen.js";
import { Bookings } from "../models/bookings.js";

export const getBookings = async (req, res) => {
  const bookings = await Bookings.findAll();
  res.json(bookings);
};

export const getClientsByEmail = async (req, res) => {
  const { email } = req.params;
  const clients = await Bookings.findOne({ where: { email } });
  res.json(clients);
};

export const createBooking = async (req, res) => {
  const { id = code, date, time, client_id, service_id } = req.body;
  const newBooking = await Bookings.create({
    id,
    date,
    time,
    client_id,
    service_id,
  });

  res.json(newBooking);
};

export const deleteBooking = async (req, res) => {
  const { id } = req.params;
  await Bookings.destroy({
    where: {
      id,
    },
  });
  res.send("Enployee Delete");
};
