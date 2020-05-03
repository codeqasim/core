<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {

	public function index()
	{
	    $data["title"] = "Travel";
	    $data["main_content"] = "home";
		$this->load->view('main', $data);
	}

    public function contact()
	{
	    $data["title"] = "Contact";
	    $data["main_content"] = "contact";
		$this->load->view('main', $data);
	}

    public function about()
	{
	    $data["title"] = "About";
	    $data["main_content"] = "about";
		$this->load->view('main', $data);
	}

}
