// routes/tipsRoutes.js

import express from "express";
import {
    createTipsCtrl,
    getTipsByIdCtrl,
    updateTipsCtrl,
    deleteTipsCtrl,
    getAllTipsCtrl
} from '../controllers/tipsController.js';

const router = express.Router();

router.post("/tips/", createTipsCtrl); // Create a new tips entry
router.get("/tips/:id", getTipsByIdCtrl); // Get a tips entry by ID
router.put("/tips/:id", updateTipsCtrl); // Update a tips entry
router.delete("/tips/:id", deleteTipsCtrl); // Delete a tips entry
router.get("/getalltips", getAllTipsCtrl); // Get all tips entries

export default router;
