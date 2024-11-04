// routes/reservationRoutes.js
import express from "express";
import * as reservationController from "../controllers/reservationController.js";

const router = express.Router();
router.get("/", reservationController.getAllReservations);
router.get("/:id", reservationController.getReservationById);
router.post("/", reservationController.createReservation);
router.delete("/:id", reservationController.deleteReservation);

export default router;
