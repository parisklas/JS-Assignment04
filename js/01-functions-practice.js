//STEP 1
function halfNumber(x) {
    let half = x / 2;
    console.log("Half of " + x + " is " + half);
    return half;
}
halfNumber(26);

//STEP 2
function squareNumber(num) {
    let squared = Math.pow(num, 2);
    console.log("The result of squaring the number " + num + " is " + squared);
    return squared;
}
squareNumber(4);

//STEP 3
function percentOf(num1, num2) {
    let percent = (num1 / num2) * 100;
    console.log(`${num1} is ${percent}% of ${num2}.`);
    return percent;
}
percentOf(2,4);

//STEP 4
function findModulus(num1, num2) {
    let remainder = num1 % num2;
    console.log(`${remainder} is the modulus of ${num1} and ${num2}.`);
    return remainder;
}
findModulus(10,4);

//STEP 5
let userInput = window.prompt("Enter 5 numbers, separated by commas ','");
let splitInput = userInput.split(",");
let sum = 0;

for (var i = 0; i < splitInput.length; i++) {
    splitInput[i] = parseInt(splitInput[i], 10);
    sum += splitInput[i];
}
console.log(splitInput);
console.log(sum);