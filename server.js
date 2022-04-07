import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import helloController from "./controllers/hello-controller.js";
import userController from "./controllers/users/users-controller.js";
import tuitsController from "./controllers/tuits/tuits-controller.js";

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/webdev");

helloController(app);
userController(app);
tuitsController(app);

app.get("/", (req, res) => {
  res.send("Welcome to Full Stack Development!");
});

app.listen(process.env.PORT || 4000);
