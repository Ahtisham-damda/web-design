<?php
$num1 = 45.56;
$num2 = 36.63;
echo "<h3>PHP</h3>"
echo "Hello World <br>"
echo "is learning PHP <br>"
echo "which is a server side programming language"

// if($num1 % 2 == 0){
//     echo $num1. "is an even number";
// }else{
//     echo $num1. "is an odd number";
// }

$fact = 1;
$n = 5;
for($i = 1; $i <n ; $i++){
    $fact *= $i;
    // $fact = $fact * $i;
}
echo "factorial of $n is = ".$fact;
$n = 8;
$i = 1;
while($i <= 10){
    // echo "$i x  $n = $n*$i"
    echo "$i x $n = ". $n * $i."<br>";
    $i++;
}