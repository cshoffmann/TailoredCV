const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 3001;

// Allow the Vercel frontend and localhost during development
const allowedOrigins = [process.env.FRONTEND_URL || "http://localhost:5173"];

// CORS configuration (dynamic)
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true); // Allow the request
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: "Content-Type,Authorization",
  optionsSuccessStatus: 204,
};

// Handle CORS globally
app.use(cors(corsOptions));
app.use(express.json());

// Explicitly handle preflight (OPTIONS) requests
app.options("*", cors(corsOptions));

// Import routes
const tailorResumeRoute = require("./routes/tailorResume");
const tailorCoverLetterRoute = require("./routes/tailorCoverLetter");

// Use routes
app.use("/api/tailor-resume", tailorResumeRoute);
app.use("/api/tailor-cover-letter", tailorCoverLetterRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
