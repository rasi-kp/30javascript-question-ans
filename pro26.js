const readline = require("readline");
var r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
var string=" ";

r1.question("Enter String :",(input)=>{
        string=(input);
        
    r1.close()
    
try
{
    console.log(string);
        var revstring=string.split('').reverse('').join('');
        console.log(revstring);
    
}
catch(error)
{
    console.log("Error :"+error.message);
}
finally
{
    console.log("Type of String :"+typeof(revstring));

}
})