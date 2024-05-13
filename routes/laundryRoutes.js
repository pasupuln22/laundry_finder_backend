// routes/laundryRoutes.js

import express from "express";
import {
    createLaundryCtrl,
    getLaundryByIdCtrl,
    updateLaundryCtrl,
    deleteLaundryCtrl,
    getAllLaundriesCtrl
} from '../controllers/laundryController.js';

const router = express.Router();

router.post("/laundry/", createLaundryCtrl); // Create a new laundry entry
router.get("/laundry/:id", getLaundryByIdCtrl); // Get a laundry entry by ID
router.put("/laundry/:id", updateLaundryCtrl); // Update a laundry entry
router.delete("/laundry/:id", deleteLaundryCtrl); // Delete a laundry entry
router.get("/getalllaundry", getAllLaundriesCtrl); // Get all laundry entries

export default router;
