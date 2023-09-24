
function run(){
let destination = document.getElementById("destination").value;
let displayEl = document.getElementById("display");
let bhade = 0;


switch(destination){
    case "mumbai":
        bhade = 450;
        break;
    case "banglore":
        bhade = 500;
        break;
    case "honnavar":
        bhade = 80;
        break;
    default:
        bhade = "invalid destination";
        break;
}


displayEl.innerHTML = bhade;
}