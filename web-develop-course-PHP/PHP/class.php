<?php
class employee{
    public $name;
    public $city;
    public $country;
    public __construct($name,$city,$country){
        $this ->name = $name;
        $this ->city = $city;
        $this ->country = $country;

    }
   public function message(){
       return $this
   }
   $sam = new employee("sam","New York","U.S.A");