// controllers/tipsController.js

import {
    createTipsMdl,
    getAllTipsMdl,
    getTipsByIdMdl,
    updateTipsMdl,
    deleteTipsMdl
} from "../models/tipsModel.js";

// Controller to create a new tips entry
export const createTipsCtrl = (req, res) => {
    const tipsData = req.body;

    createTipsMdl(tipsData, (err, results) => {
        try {
            if (err) {
                res.status(400).json({ status: 400, message: "Failed to create the tips entry" });
            } else {
                res.status(201).json({ status: 201, message: "Tips entry created successfully" });
            }
        } catch (err) {
            res.status(500).json({ status: 500, message: "Internal server error" });
        }
    });
};

// Controller to get all tips entries
export const getAllTipsCtrl = (req, res) => {
    getAllTipsMdl((err, results) => {
        if (err) {
            console.error('Error fetching all tips entries:', err);
            return res.status(500).json({ status: 500, message: 'Internal server error' });
        }

        res.status(200).json({ status: 200, data: results });
    });
};

// Controller to get a tips entry by ID
export const getTipsByIdCtrl = (req, res) => {
    const { id } = req.params;

    getTipsByIdMdl(id, (err, results) => {
        if (err) {
            console.error('Error fetching tips entry by ID:', err);
            return res.status(500).json({ status: 500, message: 'Internal server error' });
        }

        res.status(200).json({ status: 200, data: results });
    });
};

// Controller to update a tips entry
export const updateTipsCtrl = (req, res) => {
    const { id } = req.params;
    const updatedTipsData = req.body;

    updateTipsMdl(id, updatedTipsData, (err, results) => {
        try {
            if (err) {
                res.status(400).json({ status: 400, message: "Failed to update the tips entry" });
            } else {
                res.status(200).json({ status: 200, message: "Tips entry updated successfully" });
            }
        } catch (err) {
            res.status(500).json({ status: 500, message: "Internal server error" });
        }
    });
};

// Controller to delete a tips entry
export const deleteTipsCtrl = (req, res) => {
    const { id } = req.params;

    deleteTipsMdl(id, (err, results) => {
        try {
            if (err) {
                res.status(400).json({ status: 400, message: "Failed to delete the tips entry" });
            } else {
                res.status(200).json({ status: 200, message: "Tips entry deleted successfully" });
            }
        } catch (err) {
            res.status(500).json({ status: 500, message: "Internal server error" });
        }
    });
};
