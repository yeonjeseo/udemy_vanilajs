const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Clicked
// clearBtn.addEventListener('click', runEvent);

// Dobule Click
// clearBtn.addEventListener('dblclick', runEvent);

// // Mouse Down
// clearBtn.addEventListener('mousedown',runEvent);

// // Mouse Up
// clearBtn.addEventListener('mouseup',runEvent);

// // Mouse Enter
// card.addEventListener('mouseenter',runEvent);

// // Mouse Leave
// card.addEventListener('mouseleave',runEvent);

// // Mouse Over
// card.addEventListener('mouseover',runEvent);

// // Mouse Out
// card.addEventListener('mouseout',runEvent);

// Mouse Move
card.addEventListener('mousemove', runEvent);


// Event Handler
function runEvent(e){
    console.log(`EVENT TYPE : ${e.type}`);
    heading.textContent = `Mouse X : ${e.offsetX}, Mouse Y : ${e.offsetY}`;

    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}