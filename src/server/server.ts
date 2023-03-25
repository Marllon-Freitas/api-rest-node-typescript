import express from "express";
import "dotenv/config";
import bodyParser from "body-parser";
import { router } from "./routes";

const server = express();

server.use(bodyParser.json());
server.use(router);
server.use(bodyParser.urlencoded({ extended: false }));

export { server };
