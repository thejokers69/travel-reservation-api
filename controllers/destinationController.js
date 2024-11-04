// TRAVEL-RESERVATION-API/controllers/destinationController.js
import * as destinationService from "../services/destinationService.js";

export const getAllDestinations = async (req, res) => {
  try {
    const destinations = await destinationService.getDestinations();
    res.json(destinations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getDestinationById = async (req, res) => {
  try {
    const destination = await destinationService.getDestinationById(
      req.params.id
    );
    if (!destination) {
      return res.status(404).json({ error: "Destination not found" });
    }
    res.json(destination);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const createDestination = async (req, res) => {
  try {
    const destination = await destinationService.createDestination(req.body);
    res.status(201).json(destination);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const updateDestination = async (req, res) => {
  try {
    const updatedDestination = await destinationService.updateDestination(
      req.params.id,
      req.body
    );
    if (!updatedDestination) {
      return res.status(404).json({ message: "Destination non trouvée" });
    }
    res.json(updatedDestination);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteDestination = async (req, res) => {
  try {
    const deletedDestination = await destinationService.deleteDestination(
      req.params.id
    );
    if (!deletedDestination) {
      return res.status(404).json({ message: "Destination non trouvée" });
    }
    res.json({ message: "Destination supprimée avec succès" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
