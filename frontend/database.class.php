<?php 

// include_once $_SERVER['DOCUMENT_ROOT'].'/__lib/main.php';

class database{

    public static $getdatabase=NULL;

    public static function getconnection(){

        if(database::$getdatabase==NULL){

            
            $server='localhost';
            $username="suganya";
            $userpass="Sonuabi@06";
            $db_name='Office_commute';

            $conn=new mysqli($server,$username,$userpass,$db_name);

            if($conn->connect_error==true){
                return false;
            }
            else{

                database::$getdatabase = $conn;
         
                return $conn;
                

            }
        }
        else{
            return database::$getdatabase;
        }




    }
}
