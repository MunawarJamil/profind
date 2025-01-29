import express from "express";
import dotenv from "dotenv";
import db_connection from "./config/db.js";
import router from "./routes/services.routes.js";
import userRoute from "./routes/user.routes.js";
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/v1/services", router);

app.use("/api/v1/users", userRoute);

app.listen(process.env.PORT || 4000, async () => {
  await db_connection();
  console.log(`Server is running on ${process.env.PORT}`);
});
