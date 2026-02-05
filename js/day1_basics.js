// ============================================================================
// Module 1 (Day 1): JavaScript Basics Through 3 Exercises
// Time: 30-45 minutes
// Why this is useful:
// - Teaches conditions, loops, and string processing.
// - These are foundations for nearly every coding task.
// Start: run this file once.
// End: change the 3 practice inputs and explain each function in your own words.
// ============================================================================


/*
HOW TO CODE EACH SECTION (repeat this pattern)
1) Read the problem statement.
2) Write 2-3 plain-English steps before touching code.
3) Code one line at a time.
4) Run the file.
5) Compare expected vs actual output.
6) Fix one thing only, then run again.
*/

/*
HOW TO RUN
1) node js/day1_basics.js
2) Read one section at a time.
3) Change the practice values near the bottom.
4) Run again and compare output.
*/

// -----------------------------------------------------------------------------
// EXERCISE 1: FIZZBUZZ
// -----------------------------------------------------------------------------
/*
Problem:
For numbers 1 to n:
- multiple of 3 -> "Fizz"
- multiple of 5 -> "Buzz"
- multiple of both -> "FizzBuzz"

Learning goal:
- Understand if/else logic + remainder operator (%).
*/
function fizzBuzz(n) {
  const output = [];

  for (let i = 1; i <= n; i++) {
    // Check "both" first, otherwise 15 would be caught by 3 before reaching both.
    if (i % 3 === 0 && i % 5 === 0) {
      output.push("FizzBuzz");
    } else if (i % 3 === 0) {
      output.push("Fizz");
    } else if (i % 5 === 0) {
      output.push("Buzz");
    } else {
      output.push(i);
    }
  }

  return output;
}

// -----------------------------------------------------------------------------
// EXERCISE 2: REVERSE A STRING
// -----------------------------------------------------------------------------
/*
Problem:
Input "hello" -> Output "olleh"

Learning goal:
- Understand string indexes and looping backward.
*/
function reverseString(text) {
  let reversed = "";

  for (let i = text.length - 1; i >= 0; i--) {
    reversed += text[i];
  }

  return reversed;
}

// -----------------------------------------------------------------------------
// EXERCISE 3: COUNT VOWELS
// -----------------------------------------------------------------------------
/*
Problem:
Count vowels (a, e, i, o, u) in a string.

Learning goal:
- Iterate through text and count matching characters.
*/
function countVowels(text) {
  const vowels = "aeiou";
  const lower = text.toLowerCase();
  let count = 0;

  for (let i = 0; i < lower.length; i++) {
    const char = lower[i];
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

// -----------------------------------------------------------------------------
// PRACTICE INPUTS (edit these)
// -----------------------------------------------------------------------------
const fizzBuzzLimit = 20;
const wordToReverse = "JavaScript";
const textForVowelCount = "Hello World";

console.log("FizzBuzz (1.." + fizzBuzzLimit + "):", fizzBuzz(fizzBuzzLimit));
console.log("Reversed word:", reverseString(wordToReverse));
console.log("Vowel count:", countVowels(textForVowelCount));

/*
END-OF-MODULE CHECK (self-check)
- Can I explain what % does?
- Can I explain why FizzBuzz checks both 3 and 5 first?
- Can I explain reverseString loop indexes?
If yes, mark Module 1 complete in WEEK1_PROGRESS.md.
*/

module.exports = { fizzBuzz, reverseString, countVowels };
