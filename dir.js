const fs = require("fs");

if (!fs.existsSync("./newDirectory")){
    fs.mkdir("./newDirectory", (err) => {
        if (err) throw err;
        console.log("Directory created")
    })
} else {
    console.log("Directory alread exists");
}