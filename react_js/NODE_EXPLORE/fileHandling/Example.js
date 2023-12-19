const fileSystem = require('fs')
const data = "hello this is CDAC World"

fileSystem.writeFile('myfile.txt', data, 'utf-8', (error) => {
    if (error) {
        console.log(error)
        return
    } else {
        console.log("File has been written successfully...!")
    }
})


//utf-8 meaning universally this format can transfer content
// fileSystem.writeFileSync