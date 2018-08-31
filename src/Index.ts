import { Server } from "./Server";

const port = parseInt(process.env.PORT) || 8000;
Server(port);