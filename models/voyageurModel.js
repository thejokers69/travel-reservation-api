// TRAVEL-RESERVATION-API/models/voyageurModel.js
import mongoose from "mongoose";

const voyageurSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  telephone: { type: String },
});

export default mongoose.model("Voyageur", voyageurSchema);
