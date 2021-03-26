//

import express from "express";
import path from "path";

//
import morgan from "morgan";

//
import ServeAppController from "../serve-app/controller";

export const app = express();

//assets
app.use(express.static(path.join(__dirname, "./")));

//middleware
app.use(morgan("tiny"));

//
app.use("/", ServeAppController.getApp);
