//Log to Console
console.log("Hello World!");
console.log(1234);
console.log(true);

var greeting = 'hello';
console.log(greeting);
console.log({a:1,b:2,c:true});
console.table({a:1,b:2,c:true});
console.error('This is an error');
console.clear();
console.warn('This is a warning!');
console.time('Hello!');
console.log(greeting);
console.log({a:1,b:2,c:true});
console.table({a:1,b:2,c:true});
console.error('This is an error');
console.log(greeting);
console.log({a:1,b:2,c:true});
console.table({a:1,b:2,c:true});
console.error('This is an error');
console.log(greeting);
console.log({a:1,b:2,c:true});
console.table({a:1,b:2,c:true});
console.error('This is an error');
console.timeEnd('Hello!');
console.clear();
/* 
Multi
Line
Comments
*/

//var, let, const
var name = 'John Doe';
console.log(name);
name = 'Steve Smith';
console.log(name);


//Init var
var sayHi;  //declare
console.log(sayHi);
sayHi='Hello World!'; //initialize
console.log(sayHi);

//letters, numbers, _(underscores), $(money sign)
//Can not start with number

var firastName = 'Yeon';    //camel case
var middle_name = 'Jeffrey';    //Underscore
var LastName = 'Seo';   //Pascal case - recommended for constructor, class, function
console.clear();

const person = {
    name : 'Yeon Jeffrey Seo',
    age : 31
}
console.log(person);
person.name = 'Ryuha';
console.log(person);
console.clear();

const numbers = [1,2,3,4,5,6];
numbers.push(7);
console.log(numbers);
