const readline = require("readline");
var r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
r1.question("Enter input:", (input) => {
    var height = parseInt(input);
    r1.close()

    try {
        if (isNaN(height)) {
            throw new Error("notANumberError");
        }
    
        if (height > 50) {
            throw new Error("hugeHeightError");
        }
    
        if (height < 5) {
            throw new Error("tinyHeightError");
        }
    
        console.log(height);
    }
    catch (err) {
        console.log("Error :" + err.message);
    }
})