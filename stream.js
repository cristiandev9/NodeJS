const fs = require("fs");
const rs = fs.createReadStream("./math.js", {encoding:"utf-8"});
const ws = fs.createWriteStream("./newWriteStream");
// rs.on("data", (dataChunk) => {
//     console.log(dataChunk)
// })

rs.pipe(ws);