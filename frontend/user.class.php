<?php 

include_once $_SERVER['DOCUMENT_ROOT'].'\frontend\database.class.php';

class registration{

    public  function getreg($institution,$team_name,$project_title,$domain_selected,$problem_statement,$no_of_members,
    $teamlead_name,$teamlead_dept,$teamlead_dept_other,$teamlead_year,$teamlead_contact,$teamlead_mail,$member1_name,$member1_dept,
    $member1_dept_other,$member1_year,$member2_name,$member2_dept,$member2_dept_other,$member2_year,$member3_name,$member3_dept,
    $member3_dept_other,$member3_year,$member4_name,$member4_dept,$member4_dept_other,$member4_year, $fee_proof)

    {  
        $conn = database::getConnection();

        $sql="INSERT INTO `users` (`institution`,`team_name`,`project_title`,`domain_selected`,`problem_statement`,`no_of_members`,`teamlead_name`,`teamlead_dept`,`teamlead_dept_other`,`teamlead_year`,`teamlead_contact`,`teamlead_mail`,`member1_name`,`member1_dept`,`member1_dept_other`,`member1_year`,`member2_name`,`member2_dept`,`member2_dept_other`,`member2_year`,`member3_name`,`member3_dept`,`member3_dept_other`,`member3_year`,`member4_name`,`member4_dept`,`member4_dept_other`,`member4_year`,`fee_proof`)
        VALUES('$institution','$team_name','$project_title','$domain_selected','$problem_statement','$no_of_members','$teamlead_name','$teamlead_dept','$teamlead_dept_other','$teamlead_year','$teamlead_contact','$teamlead_mail','$member1_name','$member1_dept','$member1_dept_other','$member1_year','$member2_name','$member2_dept','$member2_dept_other','$member2_year','$member3_name','$member3_dept','$member3_dept_other','$member3_year','$member4_name','$member4_dept','$member4_dept_other','$member4_year','$fee_proof')";
        
        if($conn->query($sql) == true){
            return true;
        }
        else{
            return false;
        }   
    }

public static function getProfile($empId){
    $conn=database::getconnection();
    $sql="SELECT * FROM `employeedetails` WHERE `EmployeeID` = '$empId';
";
    $result=$conn->query($sql);
    print_r($result->fetch_assoc());
}


}
registration::getProfile("EMP003");