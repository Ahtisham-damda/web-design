function index(){
   Multiply()
   divide()
   add()
   subtract()
   


function Multiply()
{
   let num1 = document.getElementById("firstNum").value;
   let num2 = document.getElementById("secondNum").value;
   
   let displayEl = document.getElementById("M-display");


   let result = num1 * num2;
   displayEl.innerHTML += result;
}

function divide()
{
   let num1 = document.getElementById("firstNum").value;
   let num2 = document.getElementById("secondNum").value;
   
   let displayEl = document.getElementById("A-display") ;

    let result = num1 / num2;
    displayEl.innerHTML += result;
}
function add()
{
   let num1 = parseInt(document.getElementById("firstNum").value);
   let num2 = parseInt(document.getElementById("secondNum").value);
   
   let displayEl = document.getElementById("D-display");

    let result = num1 + num2;
    displayEl.innerHTML += result;
}
function subtract()
{
   let num1 = document.getElementById("firstNum").value;
   let num2 = document.getElementById("secondNum").value;
   
   let displayEl = document.getElementById("S-display");

    let result = num1 - num2;
    displayEl.innerHTML += result;
}
}