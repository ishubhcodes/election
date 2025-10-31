import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

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
