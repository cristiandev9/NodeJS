const fs = require("fs");
const rs = fs.createReadStream("./math.js", {encoding:"utf-8"});

rs.on("data", (dataChunk) => {
    console.log(dataChunk)
})