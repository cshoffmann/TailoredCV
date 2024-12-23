import express from "express";
import dotenv from "dotenv";
import tailorRouter from "./routes/tailor.js"; // Import your router

dotenv.config();

const app = express();
app.use(express.json()); // Middleware to parse JSON

// Use the router for the /api/tailor endpoint
app.use("/api/tailor", tailorRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
