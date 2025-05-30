import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import usersRouter from "../src/routes/userRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Selamat database mysql terkoneksi!");
});

app.use("/users", usersRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running di http://localhost:${PORT}`);
});
