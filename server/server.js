const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 3001;

const allowedOrigins = [process.env.FRONTEND_URL || "http://localhost:5173"];

// Dynamic CORS configuration
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true); // Allow the request
    } else {
      callback(new Error("Not allowed by CORS")); // Block the request
    }
  },
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

// Import routes
const tailorResumeRoute = require("./routes/tailorResume");
const tailorCoverLetterRoute = require("./routes/tailorCoverLetter");

// Use routes
app.use("/api/tailor-resume", tailorResumeRoute);
app.use("/api/tailor-cover-letter", tailorCoverLetterRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
