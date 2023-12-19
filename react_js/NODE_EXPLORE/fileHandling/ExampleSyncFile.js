// const fs = require("fs");
// let data = "";  

// try {
//     data = fs.readFileSync("accessFile.txt", "utf-8");
//     console.log(data);
// } catch (e) {
//     console.log(e);
// }


const fs = require("fs");
let data = "";  

try {
    data = fs.readFileSync("accesgsFile.txt", "utf-8");
    console.log("File content:", data);
} catch (e) {
    if (e.code === 'ENOENT') {
        console.log("File not found.");
    } else {
        console.log("Error:", e.message);
    }
}
