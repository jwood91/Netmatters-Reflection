<?php
  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "Netmatters News";
//ensure database is connected.
  try{
    $db = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);

    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // echo "Connnection Success";
  } catch(PDOException $e) {
    echo "Error in connection" . $e->getMessage();
    exit;
  };



?>
