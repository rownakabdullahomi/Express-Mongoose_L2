import { createServer, Server } from "http";
import { routeHandler } from "./routes/product.routes";
const server: Server = createServer((req, res) => {
    routeHandler(req, res);
});

server.listen(5000, ()=>{
    console.log("Node JS Server is running");
})