import EventEmitter from "events";

//Creating an Event

const emitter = new EventEmitter();

function listener() {
    console.log("Listener");
};

// Register an Event
emitter.on("even", () => {
    listener();
});

// Register an Event (//once)
emitter.once("even", () => {
    listener();
});

emitter.emit("even");
emitter.emit("even");
emitter.emit("even");

let counter = 0;
let id = setInterval(() => {
    counter = counter + 1;
    console.log(counter);
    if(counter == 10) {
        clearInterval(id);
    };
}, 500 );
