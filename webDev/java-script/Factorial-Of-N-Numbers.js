function run(){

    let n = document.getElementById("input").value;
    let displayEl = document.getElementById("display");
    let factorial = 1;

    for(let i = 1; i <= n; i++){
        // factorial = factorial*i;
        factorial *= i;
    }
    displayEl.innerHTML = factorial;
}