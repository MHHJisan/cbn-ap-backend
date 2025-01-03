const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to the Home Page!");
});

// Ensure you add this to your routes/index.js if it's handled here
router.post("/api/create-account", (req, res) => {
  const data = req.body;
  console.log("Received data:", data);
  res.json({ status: "success", receivedData: data });
});

module.exports = router;
