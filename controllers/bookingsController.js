import {
    createBookingMdl,
    getBookingByIdMdl,
    getBookingsByUserMdl,
    getAllBookingsMdl,
    getTotalPricesMdl
} from "../models/bookingsModel.js";


export const getTotalPricesCtrl = (req, res) => {
    const userId = req.params.userId;

    getTotalPricesMdl(userId, (err, totalPrices) => {
        if (err) {
            console.error('Error fetching total prices:', err);
            return res.status(500).json({ status: 500, message: 'Internal server error' });
        }

        // Extract total prices from the result object
        const summary = {
            total: totalPrices.Totalprice,
            weekly: totalPrices.TotalpriceThisWeek,
            monthly: totalPrices.TotalpriceThisMonth,
            yearly: totalPrices.TotalpriceThisYear
        };

        res.json(summary);
    });
};


export const createBookingCtrl = (req, res) => {
    const bookingData = req.body;

    createBookingMdl(bookingData, (err, results) => {
        try {
            if (err) {
                res.status(400).json({ status: 400, message: "Failed to create the booking" });
            } else {
                res.status(201).json({ status: 201, message: "Booking created successfully" });
            }
        } catch (err) {
            res.status(500).json({ status: 500, message: "Internal server error" });
        }
    });
};

export const getBookingByIdCtrl = (req, res) => {
    const { id } = req.params;

    getBookingByIdMdl(id, (err, results) => {
        if (err) {
            console.error('Error fetching booking by ID:', err);
            return res.status(500).json({ status: 500, message: 'Internal server error' });
        }

        res.status(200).json({ status: 200, data: results });
    });
};

export const getBookingsByUserCtrl = (req, res) => {
    const { user } = req.params;

    getBookingsByUserMdl(user, (err, results) => {
        if (err) {
            console.error('Error fetching bookings by user:', err);
            return res.status(500).json({ status: 500, message: 'Internal server error' });
        }

        res.status(200).json({ status: 200, data: results });
    });
};

export const getAllBookingsCtrl = (req, res) => {
    getAllBookingsMdl((err, results) => {
        if (err) {
            console.error('Error fetching all bookings:', err);
            return res.status(500).json({ status: 500, message: 'Internal server error' });
        }

        res.status(200).json({ status: 200, data: results });
    });
};


