const express = require("express");
const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Routes
// app.get("/", (req, res) => {
//   res.send("Welcome to my Express App!");
// });
const routes = require("./routes");
app.use("/", routes);
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");

// Start the server
require("dotenv").config();
const PORT = process.env.PORT || 3003;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
