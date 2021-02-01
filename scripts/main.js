// Import and invoke the ticket booth component function
import { TicketBooth } from "./TicketBooth.js";
import { RideTicketHolder } from "./rides/RideTicketHolder.js"
import { FoodTicketHolder } from "./food/FoodTicketHolder.js"
import { GameTicketHolder } from "./games/GameTicketHolder.js"
import { SideshowTicketHolder } from "./sideshows/SideshowTicketHolder.js"
import { FullPackageTicketHolder } from "./fullPackage/FullPackageTicketHolder.js"
import { TicketCounter } from "./ticketCounter/TicketCounter.js"

TicketBooth();
RideTicketHolder();
FoodTicketHolder();
GameTicketHolder();
SideshowTicketHolder();
FullPackageTicketHolder();
TicketCounter();