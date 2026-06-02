// TODO: Create a function called sum. The function will take in a parameter and
//calculate all the numbers from 0 -> the parameter. You must check if the parameter is
//an integer first before any calculation is made. If the parameter is not a number,
//return a message stating, “The value passed is not a number”. You are NOT allowed to
//use methods(!Number.isInteger(n)) or regular expressions(.match(/cat/g)). Make sure
//to test your code effectively.

function sum(numb){
    if (typeof numb !== "number" || numb % 1 !== 0){
        return "The value passed is not a number";
    }

    let total = 0;
    for (let i = 0; i <= numb; i++) {
        total += i;
        }
    return total
}
console.log(sum(5))
console.log(sum(1))
console.log(sum(10))
console.log(sum(3))
    
// // TODO: Create a function called ‘factorial’ that takes in a number as a parameter.
// //The function will print the factorial of the entered number, e.g. factorial(4) ->
// //4*3*2*1 //output 24

function factorial(numb){
    let result = 1;
    for(let i = numb; i >= 1; i--){
        result *= i;
    }
    return result;
}
console.log(factorial(4))
console.log(factorial(8))
console.log(factorial(10))

// TODO: Create a function called funkyMath . If this function is called with 2
//arguments the function will subtract the first from the second. If the function is called
//with 3 arguments it will add all 3 numbers together. If the function is called with 4
//arguments it will add together argument 1 and 2 , 3 and 4 separately. Then divide
//them accordingly, eg funkyMath(8,2,3,5) -> 8+2 divided by 3+5 -> 10/8 //output 1,2

function funkyMath(a, b, c, d) {
    if(arguments.length === 2) {
        return b - a;
    }
    if (arguments.length === 3) {
        return a + b + c;
    }
    if (arguments.length === 4) {
        return (a + b) / (c + d);
    }
    return "Invalid number of arguments";
}
console.log(funkyMath(8, 16))
console.log(funkyMath(5, 7, 10))
console.log(funkyMath(8, 2, 3, 5))

// TODO: Create a loop that will remove all the odd numbers from the array and add
//them to a new array. Use the current array [1, 2 , 33, 45, 6, 44].
//Bonus: Make sure to arrange them from smallest to biggest.()

let numbers = [1, 2, 33, 45, 6, 44];
let oddNumbers = [];

for (let i = numbers.length - 1; i >= 0; i--) {
    if (numbers[i] % 2 !== 0){
        oddNumbers.push(numbers[i]);
        numbers.splice(i, 1);
    }
}
oddNumbers.sort((a, b) => a - b);

console.log("Odd Numbers:", oddNumbers);
console.log("Even Numbers:", numbers);

// TODO: Create an object called ‘me’ with properties of first name, last name, age,
//favourite colour, dream car

let me = {
    fisrtName: "Likona",
    lastName: "Mkhatshana",
    age: 21,
    favouriteColor: "Pink",
    dreamCar: "BMW M4"
}
console.log(me);

// TODO: Create and add a new property and value of ‘favourite food’ to the object.
me.favouriteFood = "Burger";
console.log(me)

// TODO: . Now delete the age property from the object
delete me.age;
console.log(me)
