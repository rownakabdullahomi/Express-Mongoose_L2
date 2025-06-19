import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import config from "./config";

const app = express();

app.use(cors());
app.use(express.json());

app.listen(config.port, ()=>{
    console.log(`⚡ Server is running on port: ${config.port}.`);
})

async function server () {

    try {
        // console.log(config);
        await mongoose.connect(config.database_url!);

        console.log(`✅ Connected to MongoDB.`);
    } catch (error) {
        console.error(`Server error ---> ${error}`)
    }

}

server();