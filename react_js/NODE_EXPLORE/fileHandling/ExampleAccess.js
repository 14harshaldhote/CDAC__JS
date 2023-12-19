const f = require('fs');
const data = "shashank is absent today..!";

f.access("accessFile.txt", f.constants.F_OK, (error) => {
    if (!error) {
        f.writeFile("accessFile.txt", data, (error) => {
            if (!error) {
                console.log("File has been written successfully...");
            } else {
                console.log(error);
            }
        });
    } else {
        console.log(error);
    }
});
