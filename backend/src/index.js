import express from "express";
import userRouter from "./routes/userRouter.js";
import authRouter from "./routes/authRouter.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
const app = express();
const port = 3005; /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

dotenv.config();

mongoose.connect(process.env.MONGO_CONNECTION_STRING).then(() => {
  console.log("database connected");
});
app.use(cors());
app.use(express.json());
app.use("/users", userRouter);
app.use("/auth", authRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
