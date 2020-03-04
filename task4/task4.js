// Task 4:
// Your order, please
// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

str = "4of Fo1r pe6ople g3ood th5e the2";
numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Разбиваем на слова

let i = 0;
let j = 0;
let arr = [];
let arr1 = [];
let str1 = '';
while (i <=str.length) {
str1 = str1 + str[i];
i++;

if (str[i] == ' '|| i == str.length){
    arr[j] = str1;
    i++;
    j++;
    str1 = '';
    continue;
}
} 
console.log(arr);

///

for (k = 0; k < arr.length; k++) {
    for (l = 0; l < 8; l++){
    if (arr[k].indexOf(l+1)!=-1){
    arr1[l] = arr[k];
    }
    }
}

alert(arr1.join(' '));