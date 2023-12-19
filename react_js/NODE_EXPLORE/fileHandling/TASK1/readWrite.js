const fs = require('fs');

const readData = (filePath) => {
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }
    });
};

const writeData = (filePath, data) => {
    if (typeof data !== 'string') {
        console.log("Error: Data must be a string.");
        return;
    }

    try {
        fs.writeFileSync(filePath, data);
        console.log("File has been written successfully...");
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    readData,
    writeData
};
