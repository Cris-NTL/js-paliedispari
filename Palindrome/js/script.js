// input prompt from user
const userWord = prompt('Please, enter a word');

// function (split/reverse/join)
function palindromeWord(userWord) {
    const reversedWord = userWord.split('').reverse().join('');
    return userWord === reversedWord;
}

// output the result
if (palindromeWord(userWord)) {
    console.log(`${userWord} is palindrome`);
} else {
    console.log(`${userWord} is not palindrome`);
}

