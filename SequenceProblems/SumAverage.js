//Solve the sum and average of five random numbers

function generateRandomNumber(){
    return Math.floor(Math.random() * 89 + 10);
}
let sum = 0;
for(index = 1 ; index <= 5 ; index++){
    let number = generateRandomNumber();
    console.log("Number " + index + " : " + number);
    sum += number;
}

console.log("Sum : " + sum);
console.log("Average : " + sum / 5);