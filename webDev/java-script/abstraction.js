function run(){

    class employees{
    constructor(){
        this.salary;
        this.position;
        this.bonus;
        this.name;
        this.section;

    }

    set(salary, position, bonus, name, section){

        if(position == "manager"){
            if(salary <= 100000){
                    this.salary = salary;
            }
            else{
                this.salary = 100000;
            }
        }

            this.position = position;
            this.bonus = bonus;
            this.name = name;
            this.section = section;
    }

    display(){
        return this.name+" "+this.salary+" "+this.position;
    }
}
let majeed = new employees();
majeed.set("10000","manager","2000","majeed","developer");
majeed.set("100000","CTO","2000","majeed","developer");

console.log(majeed.display());
}