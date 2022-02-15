
let countEl = document.getElementById("count-el");
let previousEl = document.getElementById("previous-el");
let count = 0;


function increment() {
    
    count++;
    countEl.textContent = count;
}

function save() {
    
    previousEl.textContent += count + " - ";
    count = 0;
    countEl.textContent = count;
}

function reset() {
    
    previousEl.textContent = "Previous entries: ";
    count = 0;
    countEl.textContent = count;
}