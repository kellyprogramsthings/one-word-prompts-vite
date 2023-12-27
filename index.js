import dotenv from "dotenv";
import express, { json } from "express";
import cors from "cors";
import router from "./router.js";


const server = express();
server.use(cors());
server.use(express.json({limit: '50mb'}));
server.use(express.urlencoded({limit: '50mb', extended: false}));
server.use(json());

server.use("/api", router);

dotenv.config();

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => console.info(`Server is live at localhost: ${PORT}`));