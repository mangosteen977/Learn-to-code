<meta charset='UTF-8'>
<?php
$host = "localhost";
$user = "mangsteen977"; 
$pwd = "moyamoya88!!";
$dbname = "mangsteen977";

$connect = mysqli_connect($host,$user,$pwd) or die("데이터베이스 접속오류!!");
mysqli_select_db($connect,$dbname);
?>