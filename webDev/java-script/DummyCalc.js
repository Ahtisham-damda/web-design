function index(){
    Multiply()
    add()
    Divide()
    Subtract()

    function Multiply()
    {
        let num1 = document.getElementById("FirstNum").value;  
        let num2 = document.getElementById("SecondNum").value;
    
        let displayEl= document.getElementById("M-display");

        let result = num1 * num2;
        displayEl.innerHTML += result;
    }

    function add()
    {
        let num1 = ParseInt(document.getElementById("FirstNum").value);
        let num2 = ParseInt(document.getElementById("SecondNum").value);

        let displayEl = document.getElementById("A-display");

        let result = num1 + num2;
        displayEl.innerHTML += result;
    }

    Divide()
    {
        let num1 = document.getElementById("FirstNum").value;
        let num2 = document.getElementById("SecondNum").value;

        let displayEl= document.getElementById("D-display");

        let result = num1 / num2;
        displayEl.innerHTML += result;
    }
    Subtract()
    {
         let num1 = document.getElementById("FirstNum").value;
         let num2 = document.getElementById("SecondNum").value;

         let displayEl = document.getElementById("S-display");

         let result = num1 - num2;
         displayEl.innerHTML += result;
    }
}