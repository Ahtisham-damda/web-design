function index(){

    let destination = document.getElementById("destination").value;
    let reservationType = document.getElementById("reservationType").value;
    let age = document.getElementById("age").value;
    let displayEl = document.getElementById("display");

    let rate = 0;
    let baseRate = getBaseRate(destination);
    let rate = getRateOnAge(age, baseRate);
    let finalRate = getRatebasedonReservation(baseRate,reservationType);

    displayEl.innerHTML=finalRate;

    
// ........................1st function............................
 

function getBaseRate(destination){
        let baseRat = 0;

        switch(destination){
            case"mumbai":
            baseRate = 450;
            break;
            case "banglore":
                baseRate = 300;
                break;
                case "manglore":
                baseRate = 250;
                break;
                case "goa":
                    baseRate = 200;
                    break;
                    case "delhi":
                        baseRate = 1000;
                        break;
                        default:
                            alert("invalid destination");
        }
        return baseRate;
    }


// ........................2nd function............................
    

function getRatebasedonReservation(baseRate,reservationType){
        if(reservationType == "tatkaal"){
            rate = baseRate + 150;
        }else if(reservationType == "normal"){
            rate = baseRat;
        }
        return rate;
    }


        // ........................3rd function............................
    
    
        function getRateOnAge(age,baseRat){
        let discountAmount = 0;
        if(age>=8 && age<=60){
            rate = baseRate;
        }else{
            discountAmount = baseRate * 0.10;
            rate -= discountAmount;
        }
        return rate;
    }
    
    }
