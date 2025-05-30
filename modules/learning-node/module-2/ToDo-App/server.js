const http = require("http");

const server = http.createServer((req, res)=>{
    console.log(req.url, req.method);
    res.end("Welcome to ToDo App Server");
})

server.listen(5000, "127.0.0.1", ()=>{
    console.log("Server listening to port 5000");
})

