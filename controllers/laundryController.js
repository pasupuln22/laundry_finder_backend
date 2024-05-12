// controllers/laundryController.js

import {
    createLaundryMdl,
    getLaundryByIdMdl,
    updateLaundryMdl,
    deleteLaundryMdl,
    getAllLaundriesMdl
} from "../models/laundryModel.js";

// Controller to create a new laundry entry
export const createLaundryCtrl = (req, res) => {
    const laundryData = req.body;

    createLaundryMdl(laundryData, (err, results) => {
        try {
            if (err) {
                res.status(400).json({ status: 400, message: "Failed to create the laundry" });
            } else {
                res.status(201).json({ status: 201, message: "Laundry created successfully" });
            }
        } catch (err) {
            res.status(500).json({ status: 500, message: "Internal server error" });
        }
    });
};

// Controller to get a laundry entry by ID
export const getLaundryByIdCtrl = (req, res) => {
    const { id } = req.params;

    getLaundryByIdMdl(id, (err, results) => {
        if (err) {
            console.error('Error fetching laundry by ID:', err);
            return res.status(500).json({ status: 500, message: 'Internal server error' });
        }

        res.status(200).json({ status: 200, data: results });
    });
};

// Controller to update a laundry entry
export const updateLaundryCtrl = (req, res) => {
    const { id } = req.params;
    const updatedLaundryData = req.body;

    updateLaundryMdl(id, updatedLaundryData, (err, results) => {
        try {
            if (err) {
                res.status(400).json({ status: 400, message: "Failed to update the laundry" });
            } else {
                res.status(200).json({ status: 200, message: "Laundry updated successfully" });
            }
        } catch (err) {
            res.status(500).json({ status: 500, message: "Internal server error" });
        }
    });
};

// Controller to delete a laundry entry
export const deleteLaundryCtrl = (req, res) => {
    const { id } = req.params;

    deleteLaundryMdl(id, (err, results) => {
        try {
            if (err) {
                res.status(400).json({ status: 400, message: "Failed to delete the laundry" });
            } else {
                res.status(200).json({ status: 200, message: "Laundry deleted successfully" });
            }
        } catch (err) {
            res.status(500).json({ status: 500, message: "Internal server error" });
        }
    });
};

// Controller to get all laundry entries
export const getAllLaundriesCtrl = (req, res) => {
    getAllLaundriesMdl((err, results) => {
        if (err) {
            console.error('Error fetching all laundries:', err);
            return res.status(500).json({ status: 500, message: 'Internal server error' });
        }

        res.status(200).json({ status: 200, data: results });
    });
};
