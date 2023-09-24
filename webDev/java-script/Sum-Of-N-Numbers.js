function run(){

    let n = document.getElementById("input").value;
    let displayEl = document.getElementById("display");
    let sum = 0;

    for(let i = 1; i <= n; i++){
        // sum = sum+i;
        sum += i;
    }
    displayEl.innerHTML = sum;
}