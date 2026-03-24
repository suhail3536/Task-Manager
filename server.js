const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// .env ko load karna
dotenv.config();

// database connect karna
connectDB();

// express app create
const app = express();

// middleware (json data read karne ke liye)
app.use(express.json());

// routes connect karna
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/tasks", require("./routes/taskRoutes"));

// server start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});