<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Hotels extends CI_Controller {

	public function index()
	{
	    $data["title"] = "Hotels";
	    $data["main_content"] = "hotels";
		$this->load->view('main', $data);
	}

}
