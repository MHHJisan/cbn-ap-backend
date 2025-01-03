const express = require("express");
const cors = require("cors");
const routes = require("./routes");
require("dotenv").config();

const app = express();

// CORS Configuration
const corsOptions = {
  origin: "http://localhost:3000", // Frontend URL
  methods: ["GET", "POST"], // Allow GET and POST methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allow these headers
};
app.use(cors(corsOptions));

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Example API endpoint
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

// Create Account Endpoint (Make sure this exists in your app.js)
app.post("/api/create-account", (req, res) => {
  const data = req.body;
  console.log("Received data:", data);
  res.json({ status: "success", receivedData: data });
});

// Load Routes
app.use("/", routes);

// Static Files and View Engine
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");

// Start the server
const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
