import express from "express";
import usersRouter from "./routes/UsersRoute.js";
import movieRouter from "./routes/MovieRoute.js"
const app = express();
const port = 3000;

app.use(express.json());
app.use("/users", usersRouter);
app.use("/api", movieRouter);
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
