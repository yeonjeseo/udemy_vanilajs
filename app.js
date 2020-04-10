const name = "John";
const age = 31;
const job = "Web Developer";
const city = "Miami";
let html;

function Hello() {
    return "Hello!";
}
//Without templete strings (es5)
html = "<ul><li>Name : " + name + "</li>" + "<li>Age : " + age + "</li>" + "<li>Job : " + job + "</li>" + "<li>City :" + city + "</li></ul>";

//With templete strings (es6)
html = `
<ul>
    <li>Name : ${name}</li>
    <li>Age : ${age}</li>
    <li>Job : ${job}</li>
    <li>City : ${city}</li>
    <li>${2 + 2}</li>
    <li>${Hello()}</li>
    <li>${age > 30 ? true : false}</li>
    </ul>`;
document.body.innerHTML = html;
