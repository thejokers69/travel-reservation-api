// TRAVEL-RESERVATION-API/controllers/voyageurController.js
import * as voyageurService from "../services/voyageurService.js";

export const getAllVoyageurs = async (req, res) => {
  try {
    const voyageurs = await voyageurService.getVoyageurs();
    res.json(voyageurs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getVoyageurById = async (req, res) => {
  try {
    const voyageur = await voyageurService.getVoyageurById(req.params.id);
    if (!voyageur) {
      return res.status(404).json({ message: "Voyageur non trouvé" });
    }
    res.json(voyageur);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createVoyageur = async (req, res) => {
  try {
    const newVoyageur = await voyageurService.createVoyageur(req.body);
    res.status(201).json(newVoyageur);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateVoyageur = async (req, res) => {
  try {
    const updatedVoyageur = await voyageurService.updateVoyageur(
      req.params.id,
      req.body
    );
    if (!updatedVoyageur) {
      return res.status(404).json({ message: "Voyageur non trouvé" });
    }
    res.json(updatedVoyageur);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteVoyageur = async (req, res) => {
  try {
    const deletedVoyageur = await voyageurService.deleteVoyageur(req.params.id);
    if (!deletedVoyageur) {
      return res.status(404).json({ message: "Voyageur non trouvé" });
    }
    res.json({ message: "Voyageur supprimé avec succès" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
