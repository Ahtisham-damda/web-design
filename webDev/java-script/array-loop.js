function run(){

    let displayEl = document.getElementById("display");
    // 
    let marks = document.getElementById("search").value;

    for(let i = 0; i < marks.length; i++)
    {
        displayEl.innerHTML += " " + marks[i] + " " ;
    }
}