<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Method: Get Post");
    header("Access-Control-Header: X-Reuqested-With");

    $GLOBALS['connection'] = mysqli_connect("localhost", "root", "", "task") or die("Not Connected!");
    class TASK {
        function assoc(){
            $data = array();
            $response = mysqli_query($GLOBALS['connection'], "SELECT * from formdata");
            while($row = mysqli_fetch_assoc($response)){
                array_push($data, $row); 
            }
            return json_encode(array("status" => "success", "data" => $data));
        }
        function insert($fname, $lname, $uname, $pnum, $email, $skills, $experienceFrom, $experienceTo, $description){
            if(mysqli_query($GLOBALS['connection'], "INSERT INTO formdata(fname, lname, uname, pnum, email, skills, experienceFrom, experienceTo, descriptions) VALUES('$fname', '$lname', '$uname', $pnum, '$email', '$skills', '$experienceFrom', '$experienceTo', '$description')")){
                return json_encode(array("status" => "success", "message" => "Data Inserted"));
            }else{
                return json_encode(array("status" => "error", "message" => "Something went wrong"));
            }
        }
        function delete($id){
            if(mysqli_query($GLOBALS['connection'], "DELETE FROM formdata WHERE id = $id")){
                return json_encode(array("status" => "success", "message" => "Data Deleted"));
            }else{
                return json_encode(array("status" => "error", "message" => "Something went wrong"));
            }
        }
        function edit($eid){
            $data = array();
            $response = mysqli_query($GLOBALS['connection'], "SELECT * from formdata WHERE id = $eid");
            while($row = mysqli_fetch_assoc($response)){
                array_push($data, $row); 
            }
            return json_encode(array("status" => "success", "data" => $data));
        }
        function update ($uid, $fname, $lname, $uname, $pnum, $email, $skills, $experienceFrom, $experienceTo, $description) {
            if(mysqli_query($GLOBALS['connection'], "UPDATE formdata SET fname='$fname', lname='$lname', uname='$uname', pnum='$pnum', email='$email', skills='$skills', experienceFrom='$experienceFrom', experienceTo='$experienceTo' WHERE id = $uid")) {
                return json_encode(array("status"=>"success", "message"=>"Data Updated Successfully!"));   
            } else {
                return json_encode(array("status"=>"error", "message"=>"Some went wrong!"));
            }
        }
    }

    $taskinstance = new TASK();

    if(($_SERVER["REQUEST_METHOD"] == "POST") || ($_SERVER["REQUEST_METHOD"] == "GET")){
        if(!empty($_POST['action'])){
            if($_POST['action'] == "assoc"){
                echo $taskinstance->assoc();
            }
            if($_POST['action'] == "insert"){
                echo $taskinstance->insert($_POST['fname'], $_POST['lname'], $_POST['uname'], $_POST['pnum'], $_POST['email'], $_POST['skills'], $_POST['experienceFrom'], $_POST['experienceTo'], $_POST['description']);
            }
            if($_POST['action'] == "delete"){
                echo $taskinstance->delete($_POST['id']);
            }
            if($_POST['action'] == "edit"){
                echo $taskinstance->edit($_POST['eid']);
            }
            if($_POST['action'] == "update"){
                echo $taskinstance->update($_POST['uid'], $_POST['fname'], $_POST['lname'], $_POST['uname'], $_POST['pnum'], $_POST['email'], $_POST['skills'], $_POST['experienceFrom'], $_POST['experienceTo'], $_POST['description']);
            }
        }
    }
?>