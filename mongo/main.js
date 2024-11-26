require("dotenv").config();
require("./config/db");
const express = require("express");

const studentsRoutes = require("./routes/students.route");

const app = express();

const port = process.env.PORT || 3000;
app.use(express.json());

app.use("/api", studentsRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
