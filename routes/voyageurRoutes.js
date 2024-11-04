// routes/voyageurRoutes.js
import express from "express";
import * as voyageurController from "../controllers/voyageurController.js";

const router = express.Router();
router.get("/", voyageurController.getAllVoyageurs);
router.get("/:id", voyageurController.getVoyageurById);
router.post("/", voyageurController.createVoyageur);
router.put("/:id", voyageurController.updateVoyageur);
router.delete("/:id", voyageurController.deleteVoyageur);

export default router;
