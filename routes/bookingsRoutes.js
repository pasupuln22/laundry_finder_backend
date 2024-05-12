import express from "express";
import {
    createBookingCtrl,
    getBookingByIdCtrl,
    getBookingsByUserCtrl,
    getAllBookingsCtrl,
    getTotalPricesCtrl
} from '../controllers/bookingsController.js';

const route = express.Router();

route.post("/booking", createBookingCtrl);
route.get("/booking/:id", getBookingByIdCtrl);
route.get("/bookings/user/:user", getBookingsByUserCtrl);
route.get("/bookings", getAllBookingsCtrl);
route.get("/totalprices/:userId", getTotalPricesCtrl);

export default route;
