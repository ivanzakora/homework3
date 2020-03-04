// Task 2:
// Two Oldest Ages
// The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value
// should be an array in the format [second oldest age, oldest age].

// The order of the numbers passed in could be any order. The array will always include at least 2 items.

// For example:

// twoOldestAges( [1, 2, 10, 8] ) // should return [8, 10]


alert (twoOldestAges ([1, 2, 10, 8]));

    function twoOldestAges (array){

    var max = array[0];
    for (var i = 0; i < array.length; i++) {
        if (max < array[i]) max = array[i];
    }
    console.log(max);


    var premax = array[0];
    for (var i = 0; i < array.length; i++) {
        if (premax < array[i] && array[i] < max) premax = array[i];
    }
    console.log(premax);

    return [premax, max];
    }