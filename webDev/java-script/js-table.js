function run(){
    let displayEl = document.getElementById("display");

     let htmldata = " <table>";
     
     htmldata += 
     "<tr>" +
      "<th>SlNo</th>" +
       "<th>Name</th>" +
        "<th>Address</th>" +
        "<br>";

        htmldata += 
        "<tr>" +
        "<td>1</td>     " +
         "<td>Ahtisham</th>  " +
          "<td>Muglihonda</td>  " +
          "<br>";

        htmldata +=
         "<tr>" +
          "<td>2</td>    " +
           "<td>Ammar</td>  " +
            "<td>Azadnagar</td>  " +
            "<br>";

        htmldata +=
         "<tr>" +
          "<td>3</td>    " +
           "<td>Abid</td>   " +
            "<td>Kargadde</td>  " +
            "<br>";

        htmldata +=
         "<tr>" +
          "<td>4</td>    " +
           "<td>Siraj</td>  " +
            "<td>bundar road</td>    " +
            "<br>";

            htmldata += "</table>"

            displayEl.innerHTML= htmldata ; 

}