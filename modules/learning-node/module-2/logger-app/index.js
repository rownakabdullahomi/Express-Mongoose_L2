const path = require("path");
const fs = require("fs");
const { isDataView } = require("util/types");

// console.log(process.argv);

const inputArguments = process.argv.slice(2);

// const text = inputArguments.join(" ").concat("\n");
const text = inputArguments.join(" ");

const timestamp = new Date().toISOString();

const message = `${text} ${timestamp} \n`

if(!message){
    console.log("Please provide a message to log...");
    console.log("Example: node index.js Hello World!!");
    process.exit(1);
}

const filePath = path.join(__dirname, "log.txt");

fs.appendFile(filePath, message, {encoding: "utf-8"}, ()=>{
    console.log("Log added successfully...");
})

console.log(timestamp);