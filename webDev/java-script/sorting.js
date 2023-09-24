function process(){

    // *******************Assending-order******************


    let display = document.getElementById("display");
    let names = ["abdullah", "ismail", "kaif", "najid", "hunain"];
    let output = "";
    names.sort();

    
    display.textContent = names.join(" ");

// *******************Descending-order******************

    // let display = document.getElementById("display");
    // let names = ["abdullah", "ismail", "kaif", "najid", "hunain"];
    // let output = "";
    // names.sort();

    // names.reverse();
    // display.textContent = names.join(" ");
}