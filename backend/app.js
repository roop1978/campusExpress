const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connection = require("./database/connection");
const routes = require("./routes/routes");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Dynamic CORS configuration
const corsOptions = {
  origin: function (origin, callback) {
    // Allow all origins
    callback(null, true);
  },
};

app.use(cors(corsOptions));

// Routes
app.use("/api", routes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
