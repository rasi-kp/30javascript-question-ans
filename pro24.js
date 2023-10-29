const readline = require("readline");
var r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
class area
{
    circle(r)
    {
        var r=3.14*r*r;
        console.log("Area of Circle:", r);
        r1.close()
    }
    square(a)
    {
        var a=a*a;
        console.log("Area of Square:", a);
        r1.close()
    }
    rectangle(l,b)
    {
        var area=l*b;
        console.log("Area of Rectangle:", area);
        r1.close()
    }
    traingle(b,h)
    {
        var area=0.5*b*h;
        console.log("Area of Traingle:", area);
        r1.close()
    }
}

class myclass extends area
{
    main() 
    {
        r1.question("Enter your Choices :\n1.Circle\n2.Square\n3.Rectangle\n4.Traincle \n\n:",(input)=>{
            var n=parseInt(input);
            switch (n) {
                case 1:
                    this.circle();
                    break;
                case 2:
                    this.square();
                    break;
                case 3:
                    this.rectangle();
                    break;
                case 4:
                    this.traingle();
                    break;
                default:
                    console.log("Invalid choice");
                    r1.close();
            }       
        })
        
    }
    circle()
    {
        r1.question("Enter the radius of the circle: ", (r) => {
            var n=parseInt(r);
            super.circle(n);
        });
    }
    square()
    {
        r1.question("Enter the side of a square ", (a) => {
            var a=parseInt(a);
            super.circle(a);
        });
    }
    rectangle()
    {
        r1.question("Enter the length of rectangle :", (len) => {
            r1.question("Enter the bredth of rectangle : ", (bre) => {
                var l=parseInt(len);
                var b=parseInt(bre);
                super.rectangle(l,b);
            });
        });
    }
    traingle()
    {
        r1.question("Enter the btreadth of traingle :", (bre) => {
            r1.question("Enter the height of traingle : ", (hei) => {
                var b=parseInt(bre);
                var h=parseInt(hei);
                super.rectangle(b,h);
            });
        });
    }
}
ob1=new myclass;
ob1.main()