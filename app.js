let val;

//Number to String
val = String(5);
val = String(4+4);
//Bool to String
val = String(true);
//Date to String
val = String(new Date());
//Array to String
val = [1,2,3,4,5,6];
//toString();
val = (10).toString();
val = (new Date()).toString();


//String to number
val = Number('5');
val = Number(true);
val = Number(false);
val = Number('Hello');
val = Number([1,2,3,4,5]);
val = Number(null);

val = parseInt('100.24');
val = parseFloat('3.1415');

// console.log(val);
// console.log(typeof val);
// console.log(val.length);
// console.log(val.toFixed(2));

const val1 = String(5);
const val2 = 6;

const sum =val1 + val2;
console.log(sum);
console.log(typeof sum);