function run(){
    let cost = 0;
    // let totalWeight = 0;
    let totalWeight = document.getElementById("input").value;

    if(totalWeight <= 5){
        cost = 40;
    }else{

        cost = 40;
        totalWeight -= 5;
        cost += totalWeight*10;
    }
    console.log(cost)
}