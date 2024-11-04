// services/reservationService.js
import Reservation from "../models/reservationModel.js";
import Destination from "../models/destinationModel.js";

export const createReservation = async (data) => {
  const destination = await Destination.findById(data.destinationId);
  if (!destination) {
    throw new Error("Destination non trouvée");
  }
  const nights =
    (new Date(data.dateFin) - new Date(data.dateDebut)) / (1000 * 3600 * 24);
  const prixTotal = destination.prixParNuit * nights * data.nombrePersonnes;
  return await Reservation.create({ ...data, prixTotal });
};

export const getReservations = async () => {
  return await Reservation.find()
    .populate("destinationId")
    .populate("voyageurId");
};

export const getReservationById = async (id) => {
  return await Reservation.findById(id)
    .populate("destinationId")
    .populate("voyageurId");
};

export const deleteReservation = async (id) => {
  return await Reservation.findByIdAndDelete(id);
};
