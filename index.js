// require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("./config/cors");
const formRoutes = require("./routes/formRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = 5001;

app.use(cors);
app.use(express.json());

connectDB();

app.use(formRoutes);
app.use(userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port 5001`);
});
