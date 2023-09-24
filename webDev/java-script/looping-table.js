function run(){
    let displayEl = document.getElementById("display");

     
     

       let students = [
        "Aqdas damda",
        "Kaif Gawai",
        "Najid Mohtesham",
        "Abyan Akrami"];
       let address =[
        "Bhatkal",
        "Manglore",
        "Banglore",
        "Mumbai"];

        let htmldata = " <table>";
        htmldata += 
     "<tr>" +
      "<th>SlNo</th>" +
       "<th>Name</th>" +
        "<th>Address</th>" +
        "</tr>";
       
       



            // displayEl.innerHTML= htmldata ; 
            // students.forEach(Element => {htmldata += "<tr>" + "<td>" + Element + "</td>";
            // address.forEach(Element => {htmldata += "<td>" + Element + "</td>" + "</tr>"})})

            // displayEl.innerHTML = htmldata;

            for(let i=0;i< students.length && i< studentsaddress.length; i++){

        htmldata += "<tr>";
        htmldata += "<td>" + (i+1) + "</td>";
        htmldata += "<td>" + students[i] + "</td>";
        htmldata += "<td>" + studentsaddress[i] + "</td>";
            }
            htmldata += "</table>"

}