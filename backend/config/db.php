<?php
    $host = 'localhost';
    $db = 'my_app';
    $user = 'root';
    $pass = 'root';

    $conn = new mysqli($host, $user, $pass, $db);
    if ($conn -> connect_error){
        die("Connection Failed". $conn->connect_error);
    }
?>