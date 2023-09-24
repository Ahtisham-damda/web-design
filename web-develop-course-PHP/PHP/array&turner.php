<?php
$numbers = array(25,64,324,12,574);
$n = count($numbers);
// $largest = $numbers[0];
// $smallest = $numbers[0];

// for($i = 0; $i < $n; $i++){
//     $largest = ($numbers[$i] > $largest) ? $numbers[$i] : $largest;
//     $smallest = ($numbers[$i] < $smallest) ? $numbers[$i]; $smallest;
// }


     // <<<<<<<<<<<<<<<<<<<<<<<<<x>>>>>>>>>>>>>>>>>>>>>>>>>>



// $largest = $numbers[0];
// $largestposition = 0;
// $smallest = $numbers[0];
// $smallestposition = 0;
// for($i = 0; $i < $n; $i++){

//     if($numbers[$i] > $largest){
//         $largest = $numbers[0];
//         $largestposition = $i;
//     }
//     if($numbers[$i] > $largest){
//         $smallest = $numbers[$i];
//         $smallestposition = $i;
//     }
// }

// <<<<<<<<<<<<<<<<<<<<<<<<<x>>>>>>>>>>>>>>>>>>>>>>>>>>


$ages = array(25,17,15,40,30);
foreach($ages as $age){
    $aligiblity = ($age>=18)? "you are eligible":"you are not eligible";
    echo $age."  ".$eligiblity ;
}