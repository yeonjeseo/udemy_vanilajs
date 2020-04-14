// document.querySelector('.clear-tasks').addEventListener('click',
// function(e){
//     console.log('Hello World!!');
//     //e.preventDefault();
// });
// href="" -- link to the same page
// href="#" -- hash symbol, going to stop it from actually making the browser redirect

document.querySelector(".clear-tasks").addEventListener("mouseover", onclick);

function onclick(e) {
    // console.log('Clicked');
    let val;
    val = e;

    // Event target element
    val = e.target;
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList;

    e.target.innerText = 'Hello';

    // Event Type
    val = e.type;

    // Timestamp
    val =e.timeStamp;

    // Coords event relative to the window
    val = e.clientY;
    val = e.clientX;

    // Coords event relative to the element
    val = e.offsetY;
    val = e.offsetX;


    console.log(val);
}
