const fs = require("fs");

fs.appendFile("myfile.txt", "Append Data async()... ok okk", "utf-8", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Data appended successfully.");
    }
});

console.log("rest of code...");
