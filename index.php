<?php

include("vendor/autoload.php");

use GroceryCrud\Core\GroceryCrud;

$database = include('database.php');
$config = include('config.php');

$crud = new GroceryCrud($config, $database);

$crud->setTable('users');
// $crud->setSubject('Customer', 'Customers');
//$crud->columns(['customerName', 'contactLastName', 'contactFirstName']);

$output = $crud->render();

if ($output->isJSONResponse) {
    header('Content-Type: application/json; charset=utf-8');
    echo $output->output;
    exit;
}

$css_files = $output->css_files;
$js_files = $output->js_files;
$output = $output->output;

include('view.php');
