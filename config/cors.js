const cors = require("cors");

const corsOptions = {
  origin: "*", // Adjust this as needed
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
};

module.exports = cors(corsOptions);
