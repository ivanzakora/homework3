//     Task 3:
// Shortest Word
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.
// Examples
// "bitcoin take over the world maybe who knows perhaps" --> 3)
// "turns out random test cases are easier than writing out basic ones" --> 3)
// "lets talk about javascript the best language" --> 3)
// "i want to travel the world writing code one day" --> 1)
// "Lets all go on holiday somewhere very cold" --> 2)

str = "i want to travel the world writing code one day";

console.log(str.length);

let i = 0;
let j = 0;
let arr = [];

let str1 = '';
while (i <= str.length) {
str1 = str1 + str[i];
i++;

if (str[i] == ' '||i == str.length){
    arr[j] = str1;
    i++;
    j++;
    str1 = '';
    continue;
}
} 
console.log(arr);



var min = arr[0].length;
for (var k = 0; k < arr.length; k++) {
    if (min > arr[k].length) min = arr[k].length;
    }
alert(min);