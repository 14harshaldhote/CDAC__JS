const printw = require('./readWrite');
const dataModule = require('./Data');

const filePath = "newFile.txt"; 
printw.writeData(filePath, dataModule.data);

printw.readData(filePath);
