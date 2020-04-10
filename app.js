const firstName = 'Yeon';
const middleName = 'Jeffrey';
const lastName = 'Seo';
const str = 'Hello there, my name is Yeon Jeffrey Seo!';
const tags = 'web development, web design, programming, frontend, backend';

let val;
//Concatenation
val = firstName + ' ' + middleName + ' ' + lastName;
//Append : Not replace it, but Add on to it.
val = 'Yeon Jeffrey ';
val += 'Seo';
//Escaping
val = "That's Awesome. I can't wait!";
val = 'That\'s Awesome. I can\'t wait!';
//Length
val=firstName.length;
//concat
val = firstName.concat(' ', middleName,' ',lastName);
//Change Case
val = firstName.toUpperCase();
val = lastName.toLowerCase();
val = firstName[0];
//indexOf()
val = middleName.indexOf('f');
val = middleName.lastIndexOf('f');
//charAt()
val = middleName.charAt('0');
//Get last character (using charAT & length)
val = middleName.charAt(middleName.length - 1);
//substring()
val = middleName.substring(0,5);
//slice()
val = middleName.slice(0,4);
val = middleName.slice(-3);
//split() -- returns an array!!!
val = str.split(' ');
val = tags.split(',');
//replace()
val = str.replace('Seo', 'Ryu');
//include()
val = str.includes('Hello');
val = str.includes('Hi');
console.log(val);
