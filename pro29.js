function myFilter(myArray, callback) {
    let sum = myArray.reduce((acc, num) => acc + num, 0);
    console.log(sum)
    if (callback(sum)) {
        return sum;
    } else {
        return sum; 
    }
}

// Example usage:
const numbers = [1, 2, 3, 4,5 ];
const isSumEven = (sum) => sum % 2 === 0;
console.log(isSumEven);
const result = myFilter(numbers, isSumEven);
console.log(result);
