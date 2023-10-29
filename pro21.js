const readline = require("readline");
var ar1=[]
var ar2=[]
var r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
r1.question("Enter the Array limit :", (option) => {
    var n = parseInt(option, 10);

    r1.question("Enter Array values \n(sperated by space key):", (input1) => {
        var a = (input1);
        ar1= a.split(" ").map(Number);
        
        for(var i=0;i<n-1;i++)
        {
            ar2[i]=ar1[i]*ar1[i+1];
        }
        console.log("\nInputed Array : "+ar1+"\n");
        console.log("Multiply by adjacency : "+ar2+"\n");
       r1.close();
    });
})