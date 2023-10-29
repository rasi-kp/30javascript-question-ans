rl.question("Enter first no : ", (input1) => {
    var a = parseInt(input1, 10);
    rl.question("Enter 2nd no ", (input2) => {
        var b = parseInt(input2, 10);

        switch(n)
        {
            case 1: c1.add(a, b);
                    break;
            case 2: c1.sub(a, b);
                    break;
            case 3: c1.mul(a, b);
                    break;
            case 4: c1.div(a, b);
                    break;
            default : console.log("Invalied Input");
        }
        
        rl.close();
    });
});
})
}
main()
