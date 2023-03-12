import express from "express";
import morgan from "morgan";
import cors from "cors";
import { fileURLToPath } from "url";
import { dirname, sep } from "path";
import config from "./config/config.json" assert {type: 'json'};
import { userController } from "./routes/userController.js";

//dirname path
const __dirname = dirname(fileURLToPath(import.meta.url) + sep);

//initialize express app
const app = express();

//config object
const cfg = {
    port: config.config.port || 5000
}

//middleware
app.use(morgan('dev'));
app.use(cors());

//routes
app.use('/user', userController);


//starting server
app.listen(cfg.port, () => console.log(`Server up at http://localhost:${cfg.port}`));