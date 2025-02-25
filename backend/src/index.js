import express from "express";
import usersRouter from "./routes/UsersRoute.js";
import movieRouter from "./routes/MovieRoute.js"
import mongoose from "mongoose";
import dotenv from "dotenv";
const app = express();
const port = 3005;

dotenv.config();

mongoose.connect(process.env.MONGO_CONNECTION_STRING).then(()=>{
  console.log("database connected");
  
});

app.use(express.json());
app.use("/users", usersRouter);
app.use("/api", movieRouter);
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
