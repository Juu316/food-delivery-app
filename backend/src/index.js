import express from "express";
import cors from "cors"; 
import usersRouter from "./routes/userRouter.js";
import authRouter from "./routes/authRouter.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = 3005; /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



mongoose
  .connect(process.env.MONGO_CONNECTION_STRING)
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Database connection error:", err));

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000", // Allow requests from your frontend's origin
    methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed HTTP methods
    credentials: true, // Allow cookies and credentials if needed
  })
);
app.use("/users", usersRouter);
app.use("/auth", authRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
