const readline=require('readline');
var r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
r1.question("Enter the Mark scored by student...\nEnter Written Test Mark : ",(m1)=>{
    var m1=parseFloat(m1);
    r1.question("Enter Lab exam marks : ",(m2)=>{
        var m2=parseFloat(m2);
        r1.question("Enter Assignment Mark : ",(m3)=>{
            var m3=parseFloat(m3);
            var t1=(m1*70)/100;
            var t2=(m2*20)/100;
            var t3=(m3*10)/100;
            var grade=t1+t2+t3;
            // console.log(t1);
            // console.log(t2);
            // console.log(t3);
            console.log("Grade of the Student is "+grade+" %");
        r1.close();
        })
    })
})
