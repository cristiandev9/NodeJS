const fs = require("fs")

fs.readFile("./files/fileRead.txt", 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data)
})

console.log("Hello...");