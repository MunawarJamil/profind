import express from "express";
import dotenv from "dotenv";
import db_connection from "./config/db.js";
import router from "./routes/services.routes.js";
import userRoute from "./routes/user.routes.js";
import cors from "cors";
dotenv.config();
const app = express();

const allowedOrigins = ['http://localhost:3000', 'http://localhost:3001'];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true // If you're sending cookies or authorization headers
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/v1/services", router);

app.use("/api/v1/users", userRoute);

app.listen(process.env.PORT || 5000, async () => {
  await db_connection();
  console.log(`Server is running on ${process.env.PORT}`);
});
