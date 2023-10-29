const readline = require("readline");

var r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
var a1 = [[],[],[]], a2 = [[],[],[]], a3 = [[],[],[]];
r1.question("Enter the size of array : ", (n) => {
    var n = parseInt(n);
    getarray(n).then(() => {
        addarray(n);
        displayarray();      
        r1.close();
    });
})
async function getarray(n) {
    for (var i = 0; i < n; i++) {
        a1[i] = [];
        for (var j = 0; j < n; j++) {
            var input = await question("Enter the values Array 1 [" + i + "][" + j + "] :");
            a1[i][j] = parseInt(input);
        }
    }
    console.log("sucessfully inserted array 1: \n"+a1);
    //input 2nd Array values
    for (var i = 0; i < n; i++) {
        a2[i] = [];
        for (var j = 0; j < n; j++) {
            var input = await question("Enter the values Array 2 [" + i + "][" + j + "] :");
            a2[i][j] = parseInt(input);
        }
    }
    console.log("sucessfully inserted array 2: \n"+a2);
    // console.log(a2);
    r1.close()
    
}
function addarray(n)
{
    for (var i = 0; i < n; i++) 
    {
        for (var j = 0; j < n; j++) 
        {
            a3[i][j]=a1[i][j]+a2[i][j];
        }
    }   
}
function displayarray()
{
    console.log("\nSum of 2 Array is : "+a3);
}

function question(query) {
    return new Promise((resolve) => {
        r1.question(query, resolve);
    });
}