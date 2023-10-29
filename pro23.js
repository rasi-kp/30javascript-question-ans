const readline = require("readline");
var r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
class mainarray {
    async getarray(n) {
        for (var i = 0; i < n; i++) {
            a1[i] = [];
            for (var j = 0; j < n; j++) {
                var input = await this.question("Enter the values Array 1 [" + i + "][" + j + "] :");
                a1[i][j] = parseInt(input);
            }
        }
    }
    displayarray() {
        console.log("Array elements are : ")
        console.log(a1)
    }
    async question(query) {
        return new Promise((resolve) => {
            r1.question(query, resolve);
        });
    }
}
m1 = new mainarray();

a1=[[],[]]
r1.question("Enter the size of array : ", (size) => {
    var n = parseInt(size);
    m1.getarray(n).then(() => {
        m1.displayarray();
        r1.close();
    });
})
