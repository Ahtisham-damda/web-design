function percentage(){
    let marks = 85;
    if(marks >= 85){
        console.log("you scored distinction");
    }
    else{
        console.log("you scored first class");
    }

    
    if(marks >= 60){
        console.log("you scored first class");
    }
    else{
        console.log("you scored second class");
    }
    
    if(marks > 35){
        console.log("you scored second class");
    }
    else{
        console.log("you failed");
    }

    if(marks > 34){
        console.log("you failed!!");
    }
    else{
        console.log("re-attepmt");
    }
}