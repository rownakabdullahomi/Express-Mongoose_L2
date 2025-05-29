const fs = require("fs");

let text = "node js";

fs.writeFile("./hello.txt", text, { encoding: "utf-8" }, (err, data) => {
    if (err) {
        console.error("Error writing file:", err);
        return;
    }
    console.log("File writing done.");
});
fs.readFile("./hello.txt", { encoding: "utf-8" }, (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log(data);
});




