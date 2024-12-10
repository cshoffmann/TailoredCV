import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("The resume is tailored");
});

export default router;
