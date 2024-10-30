document.getElementById("burger2").addEventListener("click", function() {
    document.querySelector(".navbar").classList.toggle("open")
    });

const plus = document.getElementById("butplus");
const minus = document.getElementById("butminus");
const mult = document.getElementById("butmult");
const div = document.getElementById("butdiv");
const sin = document.getElementById("butsin");
const cos = document.getElementById("butcos");
const tg = document.getElementById("buttg");
const ctg = document.getElementById("butctg");


let first = document.getElementById("first");
let second = document.getElementById("second");
let variable = document.getElementById("variable");
const result = document.getElementById("result");
const angle = document.getElementById("angle");
let res = 0;

function calculus(mark) {
    const num1 = parseFloat(first.value) || 0;
    const num2 = parseFloat(second.value) || 0;
    switch(mark) {
        case "+":
            res = num1 + num2;
            break;
        case "-":
            res = num1 - num2;
            break;
        case "*":
            res = num1 * num2;
            break;
        case "/":
            res = num2 !== 0 ? num1 / num2 : "error";
            break; 
    }
    result.textContent = res;
}

plus.addEventListener("click", (Event) => {
    Event.preventDefault()
    calculus("+");
});
minus.addEventListener("click", (Event) => {
    Event.preventDefault()
    calculus("-");
});
mult.addEventListener("click", (Event) => {
    Event.preventDefault()
    calculus("*");
});
div.addEventListener("click", (Event) => {
    Event.preventDefault()
    calculus("/");
});


let val = 0;
function trigonometric(operation) {
    const num3 = parseFloat(variable.value) || 0;
    num = (num3*Math.PI)/180; 

    switch(operation) {
        case "sin":
            val = Math.sin(num).toFixed(2); 
            break;
        case "cos":
            val = Math.cos(num).toFixed(2);
            break;
        case "tg":
            val = Math.abs(num % Math.PI) === (Math.PI / 2) ? "error" : Math.tan(num).toFixed(2);
            break;
        case "ctg":
            val = num % Math.PI === 0 ? "error" : (1 / Math.tan(num)).toFixed(2);
            break;
    }
    angle.textContent = val;
}

sin.addEventListener("click", (Event) => {
    Event.preventDefault()
    trigonometric("sin");
});
cos.addEventListener("click", (Event) => {
    Event.preventDefault()
    trigonometric("cos");
});
tg.addEventListener("click", (Event) => {
    Event.preventDefault()
    trigonometric("tg");
});
ctg.addEventListener("click", (Event) => {
    Event.preventDefault()
    trigonometric("ctg");
});
