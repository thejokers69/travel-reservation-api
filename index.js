// TRAVEL-RESERVATION-API/index.js
import express from "express";
import mongoose from "mongoose";
import destinationRoutes from "./routes/destinationRoutes.js";
import voyageurRoutes from "./routes/voyageurRoutes.js";
import reservationRoutes from "./routes/reservationRoutes.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Routes
app.use("/api/destinations", destinationRoutes);
app.use("/api/voyageurs", voyageurRoutes);
app.use("/api/reservations", reservationRoutes);

// MongoDB Connection

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Connection error", err));

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


