const readline = require("readline");

var r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
r1.question("Enter the anual Income : ",(income)=>{
    var income=parseInt(income);
    if(income<250000)
    {
        console.log("No tax ")
    }
    else if(income<=500000)
    {
        var a=(income*5)/100;
        console.log("income tax amount "+a);
    }
    else if(income<=1000000)
    {
        var a=(income*20)/100;
        console.log("income tax amount "+a);
    }
    else if(income<5000000)
    {
        var a=(income*30)/100;
        console.log("income tax amount "+a);
    }
    r1.close();
})