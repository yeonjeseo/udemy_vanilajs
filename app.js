//Create some Arrays
const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = ["Apple", "Banana", "Orange", "Pear", "Avocado", "Tomato"];
const mixed = [22, "Hello", true, undefined, null, { a: 1, b: 2 }, new Date()];
let val;
//Get array length
val = numbers.length;
//Check if it is array
val = Array.isArray(123);
//GEt single value
val = numbers[4];
val = numbers[0];
//Insert into array
numbers[2] = 100;
//Find index of value
val = numbers.indexOf(36);

// //MUTATING ARRAYS
// //Add on to the end
// numbers.push(250);
// //Add on to front
// numbers.unshift(120);
// //Take off from end
// val = numbers.pop();
// //Take off from front
// val = numbers.shift();
// //Splice the value
// numbers.splice(1,3);
// //Reverse the array
// numbers.reverse();
// //Concatenate array
// val = numbers.concat(numbers2);

//Sorting arrays
val = fruit.sort();
val = numbers.sort();
//Use the "compare" function
// val = numbers.sort(function(x,y){
//     return y-x;
// })
val = numbers.sort((x, y) => {
    return y - x;
});
//Find
function underFifty(num) {
    return num < 50;
}
val = numbers.map(underFifty);

console.log(numbers);
console.log(val);
console.log(fruit);
