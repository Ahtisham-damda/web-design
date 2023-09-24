function loop(){
    let num = document.getElementById("input").value;
    let displayEl = document.getElementById("display");
    for( let i = 1; i <= 10; i++)
    {
        // console.log(num " x " + i + " = " + i*num);
        displayEl.innerHTML += num + " x " + i + " = " + i * num + "<br>";
    }

// let i = 1;
// while(i<=10)
// {
//   displayEl.innerHTML += num + " x " + i + " = " + i * num + "<br>";
//   i++;
// }
// let i = 1;
// do{
//     while(i<=10){
//     displayEl.innerHTML += num + " x " + i + " = " + i * num + "<br>";
//     i++;}
// }
}