import express from "express";
import tailorResumeRoute from "./routes/tailor.resume.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.use("/api/tailor-resume", tailorResumeRoute);

app.listen(5000, () => {
  console.log("Server started on http://localhost:5000");
});
