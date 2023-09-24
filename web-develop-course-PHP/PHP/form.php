<?php
if(!empty($_GET)){
    echo "first name : ". $_POST["first-name"]."<br>"
    echo "last name : ". $_POST["last-name"]."<br>"
    echo "email : ". $_POST["email"]."<br>"
}else{
    echo "data is empty";
}