require("dotenv").config();
const PORT = process.env.PORT || 5000;

const express = require("express");
const usersRoutes = require("./routes/users");
const moviesRoutes = require("./routes/movies");
const middlewareLogRequest = require("./middleware/logs");

const app = express();
app.use(middlewareLogRequest);
app.use(express.json());

app.use("/users", usersRoutes);
app.use("/movies", moviesRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
