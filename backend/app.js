const express = require("express");
const bodyParser = require("body-parser");
const connection = require("./database/connection"); // Adjust the path accordingly

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
const routes = require("./routes/routes");
app.use("/api", routes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
