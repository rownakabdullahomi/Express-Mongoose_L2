const EventEmitter = require("node:events");

class SchoolBell extends EventEmitter { };

const schoolBell = new SchoolBell();

schoolBell.on("ring", () => {
    console.log("Yahoo, class ses...!");
})
schoolBell.on("ring", () => {
    console.log("Dhet,, r ekta class ase..!");
})
schoolBell.on("broken", () => {
    console.log("Oh no!! class ki ses hobe na???");
})

schoolBell.emit("ring");
schoolBell.emit("broken");