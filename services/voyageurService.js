// services/voyageurService.js
import Voyageur from "../models/voyageurModel.js";

export const createVoyageur = async (data) => {
  return await Voyageur.create(data);
};

export const getVoyageurs = async () => {
  return await Voyageur.find();
};

export const getVoyageurById = async (id) => {
  return await Voyageur.findById(id);
};

export const updateVoyageur = async (id, data) => {
  return await Voyageur.findByIdAndUpdate(id, data, { new: true });
};

export const deleteVoyageur = async (id) => {
  return await Voyageur.findByIdAndDelete(id);
};
