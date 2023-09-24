function run(){
    let displayEl = document.getElementById("display");
    let Even = 0;
    let Odd = 
    let numbers = new Array(8762,5643,7653,6752,363,74);

    for(let i=0; i<numbers.length; i++){
        if(numbers[i]%2==0){
            Even += numbers[i];
        }
        else{
            Odd += numbers[i];
        }
    }
    displayEl.innerHTML="Sum of even numbers" + Even + "<br>" + "Sum od odd numbers" + Odd;
}
 