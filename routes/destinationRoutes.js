// routes/destinationRoutes.js
import express from "express";
import * as destinationController from "../controllers/destinationController.js";
const router = express.Router();

router.get("/", destinationController.getAllDestinations);
router.get("/:id", destinationController.getDestinationById);
router.post("/", destinationController.createDestination);
router.put("/:id", destinationController.updateDestination);
router.delete("/:id", destinationController.deleteDestination);

export default router;
