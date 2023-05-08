import { Bookings } from "../models/bookings.js";
import { Clients } from "../models/clients.js";
import { Services } from "../models/services.js";
import { Bookings_Services } from "../models/bookings.js";

export const getBookings = async (req, res) => {
  const bookings = await Bookings.findAll({
    include: [Clients, Services],
  });
  res.json(bookings);
};

export const getBookingById = async (req, res) => {
  const { id } = req.params;
  const employees = await Bookings.findOne({
    where: { id },
    include: [Clients, Services],
  });
  res.json(employees);
};

export const createBooking = async (req, res) => {
  const { id, date, time, client_id, services } = req.body;
  const newBooking = await Bookings.create({
    id,
    date,
    time,
    client_id,
  });
  await newBooking.addServices(services);

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
