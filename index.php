<?php

$root=(isset($_SERVER['HTTPS']) ? "https://" : "http://").$_SERVER['HTTP_HOST'];
$root.= str_replace(basename($_SERVER['SCRIPT_NAME']), '', $_SERVER['SCRIPT_NAME']);

$views="app/views/";
$url="/app/";

$path = $_SERVER['REQUEST_URI'];

if ($path === $url ) { require $views.'index.php'; }
else if ($path == $url."about") { require $views.'about.php'; }
else if ($path == $url."contact") { require $views.'contact.php'; }

else if ($path == $url."hotels") { require $views.'hotels.php'; }