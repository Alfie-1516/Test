<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");

    include("../config/db.php");

    $data = json_decode(file_get_contents("php://input"), true);

    if(!$data){
        echo json_encode(["error"=> "No input data received"]);
        exit;
    }

    $firstName = $conn->real_escape_string($data["firstName"]);
    $lastName = $conn->real_escape_string($data["lastName"]);
    $email = $conn->real_escape_string($data["email"]);
    $phoneNumber = $conn->real_escape_string($data["phoneNumber"]);

    $sql = "INSERT INTO users(firstName, lastName, email, phoneNumber) 
        VALUES('$firstName', '$lastName', '$email', '$phoneNumber')";

    if($conn->query($sql) === TRUE){
        echo json_encode(["Success" => true, "id" => $conn->insert_id]);
    }else{
        echo json_encode(["error" => $conn -> error]);
    }
 $conn->close();
?>