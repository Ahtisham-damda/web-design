function run(){

    let marks = [80,98,77,67,78,95,46,65,56,34,24];
    let firstClass = [];
    let secondFirst = [];
    let failClass = [];

    marks.forEach(element => {
        if(element >= 85){
            firstClass.push(element);
        }
        else if(element >=65 && element < 85){
            secondFirst.push(element)
        }
        else if(element < 35){
            failClass.push(element)
        }
    })
    console.log(firstClass);
    console.log(secondFirst);
    console.log(failClass);
}