const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const postRoutes = require('./routes/imageroute');
const profileRoutes = require('./routes/candidateprofile');
const upload = require('../config/multerConfig');

const app = express();

dotenv.config({ path: "../.env" });
const port = process.env.PORT || 4000;
const url = process.env.DB_URL;

mongoose.connect(url).then(console.log("database connected successfully"));
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cors());

app.use('/api/posts', postRoutes);
app.use('/api/candidate', profileRoutes);

app.use((err, req, res, next) => {
  console.error(err); 
  const statusCode = err.statusCode || 500;
  const message = err.message || "Something went wrong!";

  res.status(statusCode).json({
    message,
  });
});

app.listen(port, () => {
  console.log(`app currently listening on port number ${port}... `);
});