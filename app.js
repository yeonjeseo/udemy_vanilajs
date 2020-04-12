// if(something){
//     do something
// }else{
//     do something else
// }

const id = 100;

// // EQUAL TO
// if (id == 100){
//     console.log('CORRECT');
// }else {
//     console.log('INCORRCET');
// }

// // NOT EQUAL TO
// if (id != 101){
//     console.log('CORRECT');
// }else {
//     console.log('INCORRCET');
// }

// // EQUAL TO VALUE & TYPE - SUGGESTED!
// if (id === 100){
//     console.log('CORRECT');
// }else {
//     console.log('INCORRCET');
// }

// // EQUAL TO VALUE & TYPE - SUGGESTED!
// if (id !== 100){
//     console.log('CORRECT');
// }else {
//     console.log('INCORRCET');
// }

//Test if undefined
// if(typeof id !== 'undefined') {
//     console.log(`The ID is ${id}`);
// }else {
//     console.log('No ID');
// }

// GREATER OR LESS THAN
// if (id <= 100) {
//     console.log("CORRECT");
// } else {
//     console.log("INCORRCET");
// }

// IF ELSE
const color = "yellow";

// if(color === 'red'){
//     console.log('Color is red');
// }else if(color === 'blue'){
//     console.log('Color is blue');
// } else {
//     console.log('Color is not red or blue');
// }

// LOGICAL OPERATOR
const name = "Steve";
const age = 70;

// AND &&
if (age > 0 && age < 12) {
    console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
    console.log(`${name} is a  teenager`);
} else {
    console.log(`${name} is an adult`);
}

// OR ||
if (age < 16 || age > 65) {
    console.log(`${name} can not in race`);
} else {
    console.log(`${name} is registered for the race`);
}

// TERNARY OPERATOR
console.log(id === 100 ? "CORRECT" : "INCORRECT");

// WITHOUT BRACES - NOT RECOMMENDED
if (id === 100) console.log("CORRECT");
else console.log("INCORRECT");
