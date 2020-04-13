let val;

const list = document.querySelector("ul.collection");
const listItem = document.querySelector("li.collection-item:first-child");

val = listItem;
val = list;

// Get child nodes
val = list.childNodes;
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[1].nodeType;
val = list.childNodes[3].nodeType;

// Type of node
// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text Code    -- >> recognize carriage return / line feed as a Text Code
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

// Get children element nodes
val = list.children;
val = list.children[1];
list.children[1].textContent = "Hello!";

// Children of children
val = list.children[3].childNodes;
val = list.children[3].children[0];
val = list.children[3].children[0].id = "test-link";

// First child
val = list.firstChild;
val = list.firstElementChild;

// Last child
val = list.lastChild;
val = list.lastElementChild;

// Count child elements
val = list.childElementCount;

// Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;
val = listItem.parentElement.parentElement.parentElement;

// Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// Get previous sibling
// val = listItem.previousSibling;
// val = listItem.previousElementSibling;

console.log(val);
