// Task 1:
// Sum of Minimums!
// Given a 2D array of size m * n. Your task is to write a function to find the sum of minimum value in each row.
// For Example:

// [
//   [1, 2, 3, 4, 5],       // minimum value of row is 1
//   [5, 6, 7, 8, 9],       // minimum value of row is 5
//   [20, 21, 34, 56, 100]  // minimum value of row is 20
// ]
// So, the function should return 26 because sum of minimums is as 1 + 5 + 20 = 26

// Note: You will be always given non-empty array containing Positive values.

// Examples

// sumMin([[1,2,3],[33,22,55],[16,42,345,79,1]])   //1 + 22 + 1 = 24 
// sumMin([[11,2],[323,2,55]])   //2 + 2 = 4 
// sumMin([[13,11,2],[3,23,23,55],[23,55,3,77],[39,7,89,94]])   //2 + 3 + 3 + 7 = 15 

arrin = [[1,2,8,9,55,3],[33,22,8,99,55,3],[16,42,345,79,5,1]];

// Массив выводим в html в таблицу
var html='<table>';
for (var i=0;i<arrin.length;i++){
html+='<tr><td>'+'['+arrin[i]+']'+'</td></tr>';
}
html+='</table>';
 
document.getElementById('arrayin').innerHTML=html;

document.getElementById("summmin").innerHTML=(sumMin(arrin));


function sumMin(arr){
 var sum = 0;

    for (var j = 0; j < arr.length; j++){
    var min = arr[j][0];
    for (var i = 0; i < arr[j].length; i++) {
        if (min > arr[j][i]) min = arr[j][i];
        }
    console.log(min);
    sum = sum + min;
    }
return sum;
}  
