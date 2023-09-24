function run(){
    
    // function calcArea(){
    //     return "invalid";
    // }

    // function calcArea(side){

    // }

    // function calcArea(length, breadth){

    // }

    // function calcArea(length, breadth, height){

    // }
    // console.log(calcArea())


// ******************************Second method***********************************
   

    // function calcArea(side){
    //     return side*side;

    // }

    // function calcArea(length, breadth){
    //     return length*breadth;
    // }

    // function calcArea(length, breadth, height){
    //     return length*breadth*height;
    // }

    // function calcArea(){
    //     return "invalid";
    // }
    // console.log(calcArea("4"))

    // *************************third method with array****************************

    class shape{
        constructor(){
            this.side = side;
            this.length = length;
            this.height = height;
            this.breadth = breadth;
        }
        area(){
            return this.side*this.side;
        }
         
    }
    class cube extends shape{
        constructor(){
            super(8,6,9,8)
        }
        area(){
            return 0.5 * this.length * this.breadth;
        }
    }

    let cubeOne = new cube(8,6,9,8);

    console.log(cubeOne.area());

    let triOne = new triangle(8,6,9,8);

    console.log(triOne.area());

}