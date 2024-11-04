// services/destinationService.js
import Destination from "../models/destinationModel.js";

export const createDestination = async (data) => {
  return await Destination.create(data);
};

export const getDestinations = async () => {
  return await Destination.find();
};

export const getDestinationById = async (id) => {
  return await Destination.findById(id);
};

export const updateDestination = async (id, data) => {
  return await Destination.findByIdAndUpdate(id, data, { new: true });
};

export const deleteDestination = async (id) => {
  return await Destination.findByIdAndDelete(id);
};
