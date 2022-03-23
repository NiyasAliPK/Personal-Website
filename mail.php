<?php

$name = $_POST['name'];
$email =$_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];
$to = "niyasalipudikunnan@gmail.com";
$txt = "Name =".$name ."\r\n Emali =" .$email. "\r\n Subject =".$subject "\r\n Message =".$message;
$headers = "From : noreplayniyasalipudikunnan@gmail.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
header("Location:thanks.html");
?>