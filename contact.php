<?php

$name = $_GET["name"];
$email = $_GET["email"];

$msg = $name;
$msg .= $email;
$msg .= "\r\n";
$msg .= $_GET["message"];

echo mail("fayazfz07@gmail.com","Contact me from " . $name, $msg);
?> 