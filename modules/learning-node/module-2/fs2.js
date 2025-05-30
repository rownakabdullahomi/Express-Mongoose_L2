const fs = require("fs");

// let text = "node js";


fs.readFile("./hello2.txt", { encoding: "utf-8" }, (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }

    fs.writeFile("./hello.txt", data, { encoding: "utf-8" }, (err) => {
        if (err) {
            console.error("Error writing file:", err);
            return;
        }
        console.log("File writing done.");
    });
});




