//inital values
let number = 0;

//gets the elements
let count = document.getElementById('count');

const decrease = document.getElementById('decrease');
const increase = document.getElementById('increase');
const reset = document.getElementById('reset');

//statements
decrease.onclick = () => {
    number--;
    count.textContent = number;
};

increase.onclick = () => {
    number++;
    count.textContent = number;
};

reset.onclick = () => {
    number = 0
    count.textContent = number;
};