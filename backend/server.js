import express from "express";
import dotenv from "dotenv";
import db_connection from "./config/db.js";
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.listen(process.env.PORT || 4000, async () => {
await db_connection();
  console.log(`Server is running on ${process.env.PORT}`);
});
