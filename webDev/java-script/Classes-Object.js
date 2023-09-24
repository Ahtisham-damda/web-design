function index(){

    class students{

        constructor(rollNo, seatNo, firstName, lastName){
        this.rollNo = rollNo;
        this.seatno = seatNo;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullDetails(){
        return this.rollNo + " " + this.firstName + " " + this.lastName
    }
}
    let student_1 = new students (1, 11, "Abdullah", "Damda Abu");
    let student_2 = new students (2, 12, "Najid", "Mohtesham" );
    let student_3 = new students (3, 13, "Kaif", "Gawai");
    let student_4 = new students (4, 14, "Abid", "Misbah");
    let student_5 = new students (5, 15, "Ammar", "Ruknuddin");

    console.log(student_1.getFullDetails());
    console.log(student_2.getFullDetails());
     console.log(student_3.getFullDetails()); 
     console.log(student_4.getFullDetails());
      console.log(student_5.getFullDetails());
}