// function to get a random number
function randomNumber(num1, num2) {
    return Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
}

// function to check if the number is odd or even
function oddOrEven(num) {
    if (num % 2 === 0) {
        return 'even';
    } else {
        return 'odd'; 
    }
}

// get the user's choise
let userOddEven = prompt('Choose between Odd or Even');
console.log(userOddEven);
let userNumber = parseInt(prompt('Choose a number between 1 and 5'));
console.log(userNumber);
// get the pc's number
let randomPcNumber = randomNumber(1 ,5);
console.log(randomPcNumber);

// sum of numbers
let sum = userNumber + randomPcNumber;
console.log(sum);

// calling oddOrEven function
let result = oddOrEven(sum);
console.log(result);

// result of the game
if (result === userOddEven) {
    console.log('You win');
} else {
    console.log('You lose');
}