// REPLACE ELEMENT

// Create Element
const newHeading = document.createElement('h2');
// Add id 
newHeading.id = 'task-title';
// New text node
newHeading.appendChild(document.createTextNode('Task Lisk'));

// Get the old heading
const oldHeading = document.getElementById('task-title');
// Parent
const cardAction = document.querySelector('.card-action');

// Replace
cardAction.replaceChild(newHeading, oldHeading);

// ReEMOVE ELEMENT
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item
lis[0].remove();

// Remove child element
list.removeChild(lis[3]);

// CLASSES & ATTRIBUTE
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;
console.log(link);
// Classes
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');
val = link;

// Attribute
val = link.getAttribute('href');
console.log(val);
val = link.setAttribute('href', 'https://google.com');
val = link.hasAttribute('href');
link.setAttribute('title', 'Google');
val = link.hasAttribute('title');
link.removeAttribute('title');
val = link.hasAttribute('title');

console.log(val);
