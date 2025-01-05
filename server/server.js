const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const corsOptions = { origin: "http://localhost:5173" };
app.use(cors(corsOptions));
app.use(express.json());

// Import routes
const tailorResumeRoute = require("./routes/tailorResume");
const tailorCoverLetterRoute = require("./routes/tailorCoverLetter");

// Use routes
app.use("/api/tailor-resume", tailorResumeRoute);
app.use("/api/tailor-cover-letter", tailorCoverLetterRoute);

// Start the server
const port = 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
