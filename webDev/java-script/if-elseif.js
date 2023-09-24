function run(){
    let destination = document.getElementById("destination").value;
    let displayEl = document.getElementById("display");
    let bhade = 0;
    
    if(destination == "mumbai"){
        bhade = 450;
    }
    else if(destination == "banglore" ){
        bhade = 500;
    }
    else if(destination == "manglore"){
        bhade = 250;
    }
    else if(destination == "honnavar"){
        bhade = 80;
    }
    else{
        bhade = "invalid destination";
    }
    displayEl.innerHTML=""
}