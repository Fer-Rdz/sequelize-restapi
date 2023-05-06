import { Bookings } from "./bookings.js";
import { Clients } from "./clients.js";
import { Services } from "./services.js";
import { Reviews } from "./reviews.js";

const a = await Bookings.findAll({ include: [Clients, Services] });

const b = await Reviews.findAll({ include: Clients });
console.log(JSON.stringify(b, null, 2));
