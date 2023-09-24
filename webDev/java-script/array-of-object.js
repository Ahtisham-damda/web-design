function run(){

    class students{

        constructor(rollNo, seatNo, firstName, lastName){
            this.rollNo = rollNo;
            this.seatNo = seatNo;
            this.firstName = firstName;
            this.lastName = lastName;

        }
        getFullDetails(){
            return this.rollNo + "  " + this.firstName + " " + this.lastName;

        }
        
    }
  
    let student_1 = new students(1, 12, "Abdul", "Majeed");
    let student_2 = new students(2, 13, "Mohammed", "Jubapu");
    let student_3 = new students(3, 15, "Kaif", "Guttigar");

    // console.log(student_1.getFullDetails());
    // console.log(student_2.getFullDetails());
    // console.log(student_3.getFullDetails());

   let arrayOfObject = [student_1,student_2,student_3];

   arrayOfObject.forEach(element => {
       console.log(element.getFullDetails())
   });
   
}


