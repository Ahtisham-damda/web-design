function run()
{
   let container = document.getElementById('container');
   let isEven = 2%2==0;
    if(isEven){
    container.textContent = "2 is an even number";

    }else{
    container.textContent = "2 is not an odd number";

    }




//    if(container.textContent == 'hello world'){

//     container.textContent = "hello javascript";

//    }else{
//     container.textContent = "hello world";
//    }
}