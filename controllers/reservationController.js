// controllers/reservationController.js
import * as reservationService from "../services/reservationService.js";

export const getAllReservations = async (req, res) => {
  try {
    const reservations = await reservationService.getReservations();
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getReservationById = async (req, res) => {
  try {
    const reservation = await reservationService.getReservationById(
      req.params.id
    );
    if (!reservation) {
      return res.status(404).json({ message: "Réservation non trouvée" });
    }
    res.json(reservation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createReservation = async (req, res) => {
  try {
    const newReservation = await reservationService.createReservation(req.body);
    res.status(201).json(newReservation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteReservation = async (req, res) => {
  try {
    const deletedReservation = await reservationService.deleteReservation(
      req.params.id
    );
    if (!deletedReservation) {
      return res.status(404).json({ message: "Réservation non trouvée" });
    }
    res.json({ message: "Réservation supprimée avec succès" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
